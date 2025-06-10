import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {Admin,Worker,ProductType,Delivery, Unit, ProductStatus,Farmer,farmersData,Review,
  reviewsData,Supplier,suppliersData,Buyer,buyersData,Product,productsData,User,Role,Order} from "./data";
import { PrismaClient ,order_customertype as DeliveryType, order_deliveryoption,review_rating, order_tracking} from "../generated/prisma";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import MySQLStoreFactory from 'express-mysql-session';
import upload,{convertToWebP} from "./imageupload";
import path from "path";
const router = express.Router();
enum normaluser {
  buyer='buyer',
  supplier='supplier',
  farmer='farmer'
  
}
const reviewrate: { [key: number]: string }={
  1:'ONE',
  2:'TWO',
  3:'THREE',
  4:'FOUR',
  5:'FIVE',
  6:'SIX',
  7:'SEVEN',
  8:'EIGHT',
  9:'NINE',
  10:'TEN'

}
const app = express();
const PORT = process.env.PORT || 5000;
const flash=require('express-flash')

const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const bcrypt=require('bcrypt')
const prisma = new PrismaClient()
const session=require('express-session')
const MySQLStore = MySQLStoreFactory(session);
app.set('trust proxy', 1);

  const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
  const sessionStore= new MySQLStore({
  host: process.env.DATABASE_HOST,
  port: 3306,
  user: 'root',
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
 
});
let samesite;
let secure;

if (process.env.ENV=='dev'){
  samesite='Strict'
  secure=false
}else{
  samesite='None'
  secure=true
}
app.use(session({
  name: 'connect.sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { 
  secure: secure,
  httpOnly: true,
  sameSite: samesite,
  maxAge: 1000 * 60 * 60 * 24,} })
);

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(flash())

initialize(passport)
app.use(passport.initialize())
app.use(passport.session())

async function findUserByEmail(email:string){
  const myuser=await prisma.user.findUnique({where:{email:email,isactive:true}})
  if(myuser){
    const usertype=myuser.usertype
    const userdata=await (prisma as any)[usertype].findUnique({where:{email:email,isactive:true} })
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
  passport.deserializeUser(async (id: string, done:any) => {
  try {

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      console.warn("User not found during deserialization");
      return done(null, false);
    }
  
    done(null, user);
  } catch (err) {
    console.error("Error in deserializeUser:", err);
    done(err, null);
  }
});
}

function checkAuth(req:Request,res:Response,next:any){res.set("Cache-Control", "no-store");
 
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
//for debugging
// console.log('cors')
// app.get("/cors-test", (req, res) => {

//   res.json({ message: "CORS works!" });
// });
// app.get("/session-debug", (req, res) => {
  
//     console.log(' session-debug')
//     console.log(res)
//   res.json({
//     session: req.session,
//     user: req.user
//   });
// });
app.post('/product/farmer',checkAuth, upload.array('images', 5),async(req: Request, res: Response)=>{
    try{

        const values = req.body
        const farmerid=(req.user as User).id
        const imageurls:any=[];
        const files = req.files as Express.Multer.File[];
        for (const file of files) {
          const filenameWithoutExt = file.filename.replace(path.extname(file.filename), '');

          const outputWebPPath = await convertToWebP(file.path, filenameWithoutExt);

          const relativeWebPPath = outputWebPPath.replace(/\\/g, '/').replace(/^.*\/uploads\//, '/uploads/');
          imageurls.push('/'+relativeWebPPath);
        }
        const productData = {
       ...values,
        priceperunit: parseFloat( values.priceperunit),
        quantity: parseInt(values.quantity, 10),
        discount: parseFloat(values.discount),
        supplierthreshold: parseInt(values.supplierthreshold, 10),
        farmerdelivery: values.farmerdelivery === 'true',
        
      };
        const myproducts = await prisma.product.create({  data: { ...productData, images:imageurls,farmerid:farmerid } });
        res.json(myproducts.status);
        console.log('products created')
    }catch(error){
        console.error("Error in /products creation",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
app.use(express.json({ limit: '10mb' }));
console.log('login')
app.post("/login",notAuth, (req: Request, res: Response,next) => {
  passport.authenticate('local',(err:any, user:any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    req.logIn(user, (err:any) => {
      if (err) {
        console.error("Login error:", err);
        return next(err);}
         
         
      res.json({ success: true, username: user.firstname }); 
    });
  })(req, res, next);
}
)

console.log('reg')
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

app.get("/auth-status", (req, res) => {res.set("Cache-Control", "no-store");
  console.log('aauth status accessed')
  console.log(req.isAuthenticated())

  res.json({
    isLoggedin: req.isAuthenticated(),
    id: req.isAuthenticated() ? (req.user as User).id : null,
    role: req.isAuthenticated() ? (req.user as User).usertype : Role.guest,
    username: req.isAuthenticated() ? (req.user as User).firstname : null
  });
});
const buildProductFilter = (input: {
  id?:string;
  farmerid?:string;
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
  } if (input.farmerid) {
   
    where.farmerid = { contains: input.farmerid };
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
      res.json({locations,types,names,myproducts});
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
   
    if (!req.user) {
    res.status(401).json({ message: 'Unauthorized: No user info found' });
    return}

    const isfarmer=(req.user as User).usertype===Role.farmer
    console.log(isfarmer)
    console.log(req.query)
    const userid=(req.user as User).id
    let myproducts=[]
    let result;
    if (req.query){
      console.log('its here')
    const filters = buildProductFilter(req.query);

    myproducts = await prisma.product.findMany({
      
      where: {
        ...(isfarmer &&filters.farmerid && { farmerid: userid}),
        ...(filters.id && { id: filters.id}),
        ...(filters.name && { name: filters.name}),
        ...(filters.type && {type: filters.type }),
        ...(filters.location && { location: filters.location }),
      },include:{farmer:true,review:true}});
      
      if (myproducts.length!=0){
        result='search'
        res.json({myproducts,result})}}

      if (!req.query || myproducts.length==0) {
     
        const myproducts=await prisma.product.findMany()
        result='all'
        if (isfarmer &&req.query){

          
          result='emptyfarmer'
        }
        res.json({myproducts,result})
        
      }
      
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
app.patch('/product/farmer',checkAuth,upload.array('images', 5),async (req: Request, res: Response) => {
    try {
      const userid = (req.user as User).id;
      const productId = req.body.id;

      if (!req.body.changedFields) {
        console.error('No changes found');
       throw res.status(400).json({ message: 'No changes found' });
      }

      // Parse changedfields JSON safely
      const changedFields = JSON.parse(req.body.changedFields);

      // Handle image uploads
      const uploadedImageUrls = (req.files as Express.Multer.File[]).map(
        (file) => `/uploads/${file.filename}`
      );

      // Combine new and existing images
      let finalImages: string[] = [];
      if (Array.isArray(changedFields.existingImages)) {
        finalImages = [...changedFields.existingImages, ...uploadedImageUrls];
      } else if (changedFields.existingImages) {
        finalImages = [changedFields.existingImages, ...uploadedImageUrls];
      } else {
        finalImages = [...uploadedImageUrls];
      }

      // Remove the helper field so Prisma doesn't throw
      delete changedFields.existingImages;

      // Handle numeric and boolean parsing
      const cleanedValues = {
        ...changedFields,
        priceperunit: changedFields.priceperunit ? parseFloat(changedFields.priceperunit) : undefined,
        quantity: changedFields.quantity ? parseInt(changedFields.quantity, 10) : undefined,
        discount: changedFields.discount ? parseFloat(changedFields.discount) : undefined,
        supplierthreshold: changedFields.supplierthreshold ? parseInt(changedFields.supplierthreshold, 10) : undefined,
        farmerdelivery: changedFields.farmerdelivery === 'true' || changedFields.farmerdelivery === true,
        servicedelivery: changedFields.servicedelivery === 'true' || changedFields.servicedelivery === true,
        images: finalImages,
      };

      const updatedProduct = await prisma.product.update({
        where: { id: productId, farmerid: userid },
        data: cleanedValues,
      });

      res.json(updatedProduct);
      console.log('Product updated successfully');
    } catch (error) {
      console.error('Error in /product/farmer PATCH:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await prisma.$disconnect();
    }
  }
);

function toDeliveryType(value: string): DeliveryType | undefined {
  return Object.values(DeliveryType).includes(value as DeliveryType)
    ? (value as DeliveryType)
    : undefined;
}
app.patch('/api/products/:id/remove-image', async (req, res) => {
  console.log('im in remove image')
  const productId = req.params.id;
  const { image } = req.body;

  if (!image){ throw res.status(400).json({ error: "No image provided" });}

  try {
    // 1. Remove image from product record
    const product = await prisma.product.findUnique({where:{id:productId}});
    if (!product) throw res.status(404).json({ error: "Product not found" });
    if (!product.images) throw res.status(404).json({ error: "images not found" });
    const newimages = (product.images as string[]).filter(img => img !== image);
    await prisma.product.update({where:{id:productId},data:{images:newimages}})
  
    // 2. Remove image file from server
    const fs = require('fs');
    const path = require('path');
    const cleanedImage = image.replace(/^\/?uploads[\\/]/, '');
    const rootDir = path.resolve(__dirname, '..');
    const imagePath = path.join(rootDir, 'uploads', cleanedImage);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      console.log('Image deleted:', imagePath);
    } else {
      console.warn('Image not found:', imagePath);
    }

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Image removal failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
function mapDeliveryToOrderDeliveryOption(delivery: Delivery): order_deliveryoption {
  return order_deliveryoption[delivery as unknown as keyof typeof order_deliveryoption];
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
            element.deliveryoption= mapDeliveryToOrderDeliveryOption(element.deliveryoption);
          });
        }
        const neworder= await prisma.myorder.createMany({ data: orderdetails});
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
      const orderid=orderdetails.orderid
      const trackingdetail=orderdetails.tracking
      const updatedorder= await prisma.myorder.update({ where:{id:orderid,farmerid:farmerid}, data: {tracking:trackingdetail}});
      res.json(updatedorder);
      console.log('order sent')
  }catch(error){
      console.error("Error in sending order",error);
      res.status(500).json({message:"Internal server error"});
  }finally {
      await prisma.$disconnect();
  }
});
app.get('/order', checkAuth, async (req: Request, res: Response) => {
  try {
    const userid = (req.user as User).id;
    const isfarmer = (req.user as User).usertype === Role.farmer;

    let orders;
    const orderids: string[] = [];
    const reviewids: string[] = [];
    let missingreviews: string[] = [];

    if (!isfarmer) {
      orders = await prisma.myorder.findMany({
        where: { userId: userid },
        include: { farmer: true, user: true, product: true },
      });

      orders.forEach(order => {
        if (order.tracking === order_tracking.DELIVERED) {
          orderids.push(order.id);
        }
      });

      const myreviews = await prisma.review.findMany({
        where: { id: { in: orderids } },
      });

      myreviews.forEach(review => reviewids.push(review.id));
      missingreviews = orderids.filter(item => !reviewids.includes(item));
    } else {
      orders = await prisma.myorder.findMany({
        where: { farmerid: userid },
        include: { farmer: true, user: true, product: true },
      });
    }

     res.json({
      orders,
      missingreviews
    });

  } catch (error) {
    console.error("Error in retrieving orders", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

app.get('/profile',checkAuth,async(req: Request, res: Response)=>{
    try{
        const value=(req.user as User).id
        const usertype=(req.user as User).usertype
        const myprofile = await (prisma as any)[usertype].
        findUnique({ where: { id: value },select:{firstname:true,lastname:true,email:true,phone:true}});
        res.json(myprofile);
        console.log(myprofile)

        console.log('profile sent')
    }catch(error){
        console.error("Error in /profile retrieval",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
app.patch('/profile',checkAuth,async(req: Request, res: Response)=>{
    try{
      const values=req.body
      console.log(values)
        const userid=(req.user as User).id
        const usertype=(req.user as User).usertype
        const myprofile = await (prisma as any)[usertype].
        update({ where: { id: userid },data: values});
        res.json(myprofile);

        console.log('profile updated')
    }catch(error){
        console.error("Error in /profile update",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
app.delete('/profile',checkAuth,async(req: Request, res: Response)=>{
    try{
        const userid=(req.user as User).id
        const usertype=(req.user as User).usertype
        const [user, myprofile] = await Promise.all([
          (prisma as any)[usertype].update({ where: { id: userid },data: { isactive: false }}),
          prisma.user.update({ where: {id: userid },data: { isactive: false }}),
        ]);
        res.json(user&&myprofile)

        console.log('profile deleted')
    }catch(error){
        console.error("Error in /profile deletion",error);
        res.status(500).json({message:"Internal server error"});
    }finally {
        await prisma.$disconnect();
    }
});
app.post('/product/review',checkAuth,async(req: Request, res: Response)=>{

  try{
      const value=(req.user as User).id
      const orderid=req.body.orderId
      const rating:number=req.body.rating
      const label=reviewrate[rating]
      if (!label) throw new Error('Invalid rating');
      const comment:string=req.body.comment
      const myorder=await prisma.myorder.findUnique({where:{id:orderid}})
      if (!myorder) throw new Error('order not found');
      const productid=myorder.productid
      const existing=await prisma.review.findFirst({where:{id:orderid}})
      if(existing){throw new Error('user has already reviewed this order!');}
      const myreview =await prisma.review.create({ data:{id:orderid,userId:value,rating:label as review_rating,
        comment:comment,productid:productid} })
      console.log(myreview)
      res.json(myreview);
      
      console.log('review created')
  }catch(error){
      console.error("Error in review creation",error);
      res.status(500).json({message:"Internal server error"});}
 
});
console.log("Registered routes:");
app._router.stack.forEach((r:any) => {
  if (r.route) {
    console.log(r.route.path);
  }
});
app.use('/uploads', express.static('uploads'));
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
