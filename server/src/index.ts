import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {Admin,Worker,ProductType,Delivery, Unit, ProductStatus,Farmer,farmersData,Review,
  reviewsData,Supplier,suppliersData,Buyer,buyersData,Product,productsData,User,Role,Order} from "./data";
import { PrismaClient ,DeliveryType} from "../generated/prisma";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

enum normaluser {
  buyer='buyer',
  supplier='supplier',
  farmer='farmer'
  
}
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
    methods: ["GET", "POST", "PUT","PATCH", "DELETE"], 
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
    
async function findById(id:string){
    const myuser= await prisma.user.findUnique({where:{id:id} })
    if(myuser){return myuser}
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
  passport.deserializeUser(async(id:string,done:any)=>{
    try {
      const user = await findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }})}
  import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

function checkAuth(req:Request,res:Response,next:any){
  if (req.isAuthenticated()){return next()}
  
  return res.status(401).json({ message: "Unauthorized. Please log in." }); 
}

function notAuth(req:Request,res:Response,next:any){
  if (req.isAuthenticated()){ 
    return res.status(403).json({ message: "Already logged in." });}
  return next()
}
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
async function finduserRole(userId:string){
  const myuser=await prisma.user.findUnique({where:{id:userId}})
  if (myuser){return myuser.usertype}
  
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
    const role:normaluser=formdata.usertype
    const { lastname,password,phone, ...newform } = formdata;
    const { usertype, ...form } = formdata;
    let userdata=null
  
    if (role==normaluser.buyer){
      userdata=await prisma.buyer.create({data:form})
      
    }
    else if (role==normaluser.farmer){
      userdata=await prisma.farmer.create({data:form})
      
    }
    else if (role==normaluser.supplier){
      userdata=await prisma.supplier.create({data:form})
      
    }
    if (userdata){
      newform.id=userdata.id
      await prisma.user.create({data:newform})
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
    id: req.isAuthenticated() ? (req.user as User).id : null,
    role: req.isAuthenticated() ? (req.user as User).usertype : Role.guest,
    username: req.isAuthenticated() ? (req.user as User).firstname : null
  });
});
const buildProductFilter = (input: {
  id?:string;
  name?: string;
  type?: string;
  location?: string;
  status?:ProductStatus;
  minPrice?: number;
  maxPrice?: number;
}) => {
  const where: any = {};  
  if (input.id) {
   
    where.id = { contains: input.id };
  }
  if (input.name) {
   
    where.name = { contains: input.name };
  }

  if (input.type) {
    where.type = { equals: input.type };
  }

  if (input.minPrice !== undefined) {
    where.priceperunit = { ...(where.priceperunit || {}), gte: input.minPrice };
  }

  if (input.maxPrice !== undefined) {
    where.priceperunit = { ...(where.priceperunit || {}), lte: input.maxPrice };
  }

  if (input.location) {
    where.location = { equals: input.location };
  }
  if (input.status) {
    where.status= { equals: input.status };
  }

  return where;
};

app.get('/home',async(req: Request, res: Response)=>{
    try{
      const myproducts = await prisma.product.findMany({select:{type:true,location:true,name:true}});
      const types = [...new Set(myproducts.map(item => item.type))];
      const locations = [...new Set(myproducts.map(item => item.location))];
      const names = [...new Set(myproducts.map(item => item.name))];
      res.json({locations,types,names});
      console.log('homedata sent')
    }catch(error){
      console.error("Error in /home",error);
      res.status(500).json({message:"Internal server error"});
    }finally {
      await prisma.$disconnect();
    }
  });
app.get('/product',async(req: Request, res: Response)=>{
  try{
    const isfarmer=(req.user as User).usertype===Role.farmer
    console.log(isfarmer)
    const userid=(req.user as User).id
    let myproducts=[]
    let result;
    if (req.query){
    const filters = buildProductFilter(req.query);

    myproducts = await prisma.product.findMany({
      
      where: {
        ...(isfarmer && { farmerid: userid}),
        ...(filters.id && { id: filters.id}),
        ...(filters.name && { name: filters.name}),
        ...(filters.type && {type: filters.type }),
        ...(filters.location && { location: filters.location }),
      },include:{farmerobj:true,reviews:true}});
      
      if (myproducts.length!=0){
        result='search'
        res.json({myproducts,result})}}

      if (!req.query || myproducts.length==0) {
     
        const myproducts=await prisma.product.findMany({where:{...(isfarmer &&{farmerid:userid})}})
        result='all'
        res.json({myproducts,result})
        
      }
      console.log(result)
    ;
    console.log('product types sent')
  }catch(error){
    console.error("Error in /products",error);
    res.status(500).json({message:"Internal server error"});
  }finally {
    await prisma.$disconnect();
  }
});

app.post('/product/checkout',checkAuth,async(req: Request, res: Response)=>{

  try{
      const value=(req.user as User).id
      const productIds:string[]=req.body

      const myproducts = await Promise.all(
        productIds.map(id =>
          prisma.product.findUnique({ where: { id } })
        )
      );
      const validProducts = myproducts.filter(p => p !== null);
      if(validProducts.length==0){
        res.status(404).json({message:'no products found'})
      }
      res.json(validProducts);
      
      console.log('checkout products sent')
  }catch(error){
      console.error("Error in /products retrieval",error);
      res.status(500).json({message:"Internal server error"});
  }finally {
      await prisma.$disconnect();
  }
});

app.get('/product/farmer',checkAuth,async(req: Request, res: Response)=>{
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

app.post('/product/farmer',checkAuth,async(req: Request, res: Response)=>{
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
app.patch('/product/farmer',checkAuth, upload.array('images'),async(req: Request, res: Response)=>{
    try{
     
      if (!req.body.values){console.error('no changes found');throw new Error}
      const productId=req.body.id
      const values=req.body.values
    //const { productId, files, ...rest } = req.body;
   // const uploadedFiles = req.files as Express.Multer.File[];

  //   const existingImages = Array.isArray(req.body.existingImages)
  //     ? req.body.existingImages
  //     : [req.body.existingImages];

  //   const newImageUrls = uploadedFiles.map(
  //     (file) => `/images/${file.filename}`
  //   );

  //   const allImages = [...existingImages, ...newImageUrls];
  //   const values = {
  //   ...rest,
  //   images: allImages,
  // };

        const myproduct= await prisma.product.update({ where:{id:productId},data: values });
        res.json(myproduct);
        console.log('product modified succesfully')
    }catch(error){
        console.error("Error in /products modification",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
function toDeliveryType(value: string): DeliveryType | undefined {
  return Object.values(DeliveryType).includes(value as DeliveryType)
    ? (value as DeliveryType)
    : undefined;
}
app.post('/order',checkAuth,async(req: Request, res: Response)=>{

    try{
        const myuser=(req.user as User)
        let role;
        if(myuser.id){
           role= await finduserRole(myuser.id)
        }
              
        const orderdetails=req.body
        if(role){
          orderdetails.forEach((element:any) => {
            element.customertype=toDeliveryType(role.toUpperCase())
            element.userId=myuser.id
          });
        }
        const neworder= await prisma.order.createMany({ data: orderdetails});
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
app.get('/order',checkAuth,async(req:Request,res:Response)=>{
  console.log(req.user)
    try{
        const user=(req.user as User)
        const myorders=await prisma.order.findMany({where:{userId:user.id}, include:{farmerobj:true,user:true,productobj:true}})
        
        res.json(myorders)
        
        console.log('orders retrieved')

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
