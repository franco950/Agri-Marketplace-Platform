import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {Admin,Worker,ProductType,Delivery, Unit, ProductStatus,Farmer,farmersData,Review,reviewsData,Supplier,suppliersData,Buyer,buyersData,Product,productsData} from "./data";
import { PrismaClient } from "../generated/prisma";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

enum normaluser {
  buyer,
  supplier,
  farmer
  
}
type User=Buyer|Supplier|Farmer|Admin|Worker

const app = express();
const PORT = process.env.PORT || 5003;
const flash=require('express-flash')
const session=require('express-session')
const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const bcrypt=require('bcrypt')
const prisma = new PrismaClient()
dotenv.config();

app.use(
  cors({ 
    origin: "http://localhost:5173", 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);
app.use(express.json());
app.use(flash())
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false
}))

initialize(passport)
app.use(passport.initialize())
app.use(passport.session())


async function findUserByEmail(email:string){
  const myuser=await prisma.user.findUnique({where:{email:email} })
  if(myuser){
    const usertype=myuser.usertype
    const userdata=await (prisma as any)[usertype].findUnique({where:{email:email} })
    return userdata}

}
    
async function findById(id:number){
    const myuser= await prisma.user.findUnique({where:{id:id} })
    if(myuser){
      const usertype=myuser.usertype
      const userdata=await (prisma as any)[usertype].findUnique({where:{id:id} })
      return userdata}
  }

function initialize(passport:any){

  const authenticate=async (email:string,password:string,done:any)=>{
      const myuser= await findUserByEmail(email)

      if (!myuser ){
          return done(null,false,{message:'no such user'})}
      
          const isPasswordCorrect = await bcrypt.compare(password, myuser.password);

          if (isPasswordCorrect) {
              return done(null, myuser);
          } else {
              return done(null, false, { message: 'Password incorrect' });
          }
  }
    
  passport.use(new LocalStrategy({usernameField:'email'},authenticate))
  passport.serializeUser((user:any,done:any)=>{done(null,user.id)})
  passport.deserializeUser(async(id:number,done:any)=>{
    try {
      const user = await findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }})}
    
function checkAuth(req:Request,res:Response,next:any){
  if (req.isAuthenticated()){return next()}
  
  return res.status(401).json({ message: "Unauthorized. Please log in." }); 
}

function notAuth(req:Request,res:Response,next:any){
  if (req.isAuthenticated()){ 
    return res.status(403).json({ message: "Already logged in." });}
  return next()
}
app.post("/login",notAuth, (req: Request, res: Response,next) => {
  passport.authenticate('local',(err:any, user:any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    req.logIn(user, (err:any) => {
      if (err) return next(err);
      res.json({ success: true, username: user.firstname }); 
    });
  })(req, res, next);
}
);

app.post("/register",notAuth, async(req: Request, res: Response) => {
  try{
  const formdata=req.body
  const existingUser = await prisma.user.findUnique({
    where:{ email: formdata.email },
  });

  if (existingUser) {
     res.status(400).json({ error: "Email already exists. Please log in or use another email." });
     return
  }
  const hashedpassword=await bcrypt.hash(formdata.password,10)
  formdata.password=hashedpassword
  const usertype:normaluser=formdata.usertype
  let userdata=null
  if (usertype==normaluser.buyer){
    userdata=await prisma.buyer.create({data:formdata})
  }
  else if (usertype==normaluser.farmer){
    userdata=await prisma.farmer.create({data:formdata})
  }
  else if (usertype==normaluser.supplier){
    userdata=await prisma.supplier.create({data:formdata})
  }

  if (userdata!==null){
  res.status(201).json({message:`success,account created for:${userdata.firstname}`});
   return}
  else{res.status(400).json({message:'bad request'}); return}}
  catch(error){
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
      res.status(400).json({ error: "Email already exists. Please use a different one." });
    return}
    console.error("server error in registration:",error);
     res.status(500).json({message:"Internal server error"});
  }finally {
    await prisma.$disconnect();
  }
});
app.delete("/logout", (req: Request, res: Response, next) => {
    
    req.session.destroy((err) => {
      if (err) {return `server error, ${err}`}
      res.status(200).json({ message: "Logged out successfully" });});
  });

app.get("/auth-status", (req, res) => {
  res.json({
    isLoggedin: req.isAuthenticated(),
    username: req.isAuthenticated() ? (req.user as User).firstname : null
  });
});

app.get('/home',async(req: Request, res: Response)=>{
    try{
      res.json({ProductType});
      console.log('product types sent')
    }catch(error){
      console.error("Error in /home",error);
      res.status(500).json({message:"Internal server error"});
    }finally {
      await prisma.$disconnect();
    }
  });
app.get('/products/:type',checkAuth,async(req: Request, res: Response)=>{
    try{
      const paramvalue=req.params.type
      const  value= ProductType[paramvalue as keyof typeof ProductType];
      const myproducts = await prisma.product.
      findMany({ where: { type: value }, select:{name:true} });
      res.json({myproducts});
      console.log('products sent')
    }catch(error){
      console.error("Error in /products",error);
      res.status(500).json({message:"Internal server error"});
    }finally {
      await prisma.$disconnect();
    }
  });
  app.get('/products/:name',checkAuth,async(req: Request, res: Response)=>{
    try{
      const value=req.params.name
      const myproducts = await prisma.product.
      findMany({ where: { name: value },include: { reviews: true },  });
      res.json({myproducts,Delivery});
      console.log('products sent')
    }catch(error){
      console.error("Error in /products",error);
      res.status(500).json({message:"Internal server error"});
    }finally {
      await prisma.$disconnect();
    }
  });
app.get('/products/farmer',checkAuth,async(req: Request, res: Response)=>{
    try{
        const value=(req.user as User).id
        const myproducts = await prisma.product.
        findMany({ where: { farmerid: value },include: { reviews: true },  });
        res.json({myproducts});
        console.log('products sent')
    }catch(error){
        console.error("Error in /products retrieval",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});

app.post('/products/farmer',checkAuth,async(req: Request, res: Response)=>{
    try{
        const values = req.body
        const myproducts = await prisma.product.create({ data: values });
        res.json({myproducts});
        console.log('products created')
    }catch(error){
        console.error("Error in /products creation",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
app.patch('/products/farmer',checkAuth,async(req: Request, res: Response)=>{
    try{
        const values = req.body
        const productid=values.productid
        const myproducts = await prisma.product.update({ where:{id:productid},data: values });
        res.json({myproducts});
        console.log('product modified succesfully')
    }catch(error){
        console.error("Error in /products modification",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
app.post('/order',checkAuth,async(req: Request, res: Response)=>{
    try{
        const orderdetails=req.body
        const neworder= await prisma.order.create({ data: orderdetails});
        res.json({neworder});
        console.log('order sent')
    }catch(error){
        console.error("Error in sending order",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
app.patch('/order/farmer',checkAuth,async(req: Request, res: Response)=>{
  try{
      const orderdetails=req.body
      const farmerid=(req.user as User).id
      const orderid=orderdetails.id
      const updatedorder= await prisma.order.update({ where:{id:orderid,farmerid:farmerid}, data: orderdetails});
      res.json({updatedorder});
      console.log('order sent')
  }catch(error){
      console.error("Error in sending order",error);
      res.status(500).json({message:"Internal server error"});
  }finally {
      await prisma.$disconnect();
  }
});
app.get('/order/farmer',checkAuth,async(req:Request,res:Response)=>{
    try{
        const userid=(req.user as User).id
        const myorders=await prisma.order.findMany({where:{farmerid:userid}})
        res.json({myorders})
        console.log('orders retrieved')

    }catch(error){
        console.error("Error in retrieving orders",error);
        res.status(500).json({message:"Internal server error"});
    }
    finally{
        await prisma.$disconnect();
    }
})
app.get('/order/:client',checkAuth,async(req:Request,res:Response)=>{
    try{
        const userid=(req.user as User).id
        const client=req.params.client
        if(client=='buyer'){
            const myorders=await prisma.order.findMany({where:{buyerId:userid}})
            res.json({myorders})
            console.log('orders retrieved')
        }
        else if (client=='supplier'){
            const myorders=await prisma.order.findMany({where:{supplierId:userid}})
            res.json({myorders})
            console.log('orders retrieved')
        }
        else(res.status(400).json({message:"invalid request params"}))

    }catch(error){
        console.error("Error in retrieving orders",error);
        res.status(500).json({message:"Internal server error"});
    }
    finally{
        await prisma.$disconnect();
    }
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
