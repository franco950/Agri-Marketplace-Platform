// async function addReviews() {
//     try {
//       const allReviews = await prisma.review.createMany({ data: reviewsData });
//       console.log(allReviews);
//       if (!allReviews) {
//         console.log("Reviews not created");
//         return;
//       } else {
//         console.log("Reviews created successfully");
//       }
//     } catch (error) {
//       console.error("Error in addReviews function:", error);
//     }
//   }
// async function encryptbuyerpasswords() {
//     try{
//         const allbuyers = await prisma.buyer.findMany()
//         if (!allbuyers){console.log('buyers not found');return }
//         else{
//             allbuyers.forEach(async single => {
//                 const hashedpassword=await bcrypt.hash(single.password,10)
//                 const newuser=await prisma.buyer.update({where:{id:single.id},data:{password:hashedpassword}})
//                 console.log(newuser)
//             })}
//     }catch (error) {
//         console.error("Error in encryptbuyerpassword function:", error);
//     }
// }


  
// encryptbuyerpasswords()

// async function encryptsupplierpasswords() {
//     try {
//         const allsuppliers = await prisma.supplier.findMany();
//         if (!allsuppliers) {
//             console.log('suppliers not found');
//             return;
//         } else {
//             for (const single of allsuppliers) {
//                 const hashedpassword = await bcrypt.hash(single.password, 10);
//                 const updatedsupplier = await prisma.supplier.update({
//                     where: { id: single.id },
//                     data: { password: hashedpassword }
//                 });
//                 console.log(updatedsupplier);
//             }
//         }
//     } catch (error) {
//         console.error("Error in encryptsupplierpassword function:", error);
//     }
// }

// encryptsupplierpasswords();
//   addReviews();
//   async function addProducts() {
//     try {
//       const allProducts = await prisma.product.createMany({ data: productsData });
//       console.log(allProducts);
//       if (!allProducts) {
//         console.log("Products not created");
//         return;
//       } else {
//         console.log("Products created successfully");
//       }
//     } catch (error) {
//       console.error("Error in addProducts function:", error);
//     }
//   }
  
//   addProducts();
//   async function addSuppliers() {
//     try {
//       const allSuppliers = await prisma.supplier.createMany({ data: suppliersData });
//       console.log(allSuppliers);
//       if (!allSuppliers) {
//         console.log("Suppliers not created");
//         return;
//       } else {
//         console.log("Suppliers created successfully");
//       }
//     } catch (error) {
//       console.error("Error in addSuppliers function:", error);
//     }
//   }
  
//   addSuppliers()


  
// async function addbuyers() {
//     try{
//         const allbuyers = await prisma.buyer.createMany({data:buyersData})
//         console.log(allbuyers)
//         if (!allbuyers){console.log('buyers not created');return }
//         else{
//                 console.log(allbuyers)
//             }
//         }catch (error) {
//             console.error("Error in addbuyers function:", error);
//         }
// }
  
//   addbuyers()
  
// async function addfarmers() {
//     try{
//       const allfarmers = await prisma.farmer.createMany({data:farmersData})
//       console.log(allfarmers)
//       if (!allfarmers){console.log('farmers not found');return }
//       else{
          
//               console.log(allfarmers)
//             }
//       }catch (error) {
//           console.error("Error in addfarmer function:", error);
//       }
//   }
  
//   addfarmers()
  
//   async function encryptfarmerpasswords() {
//     try{
//       const allfarmers = await prisma.farmer.findMany()
//       if (!allfarmers){console.log('farmers not created');return }
//       else{
//           allfarmers.forEach(async single => {
//               const hashedpassword=await bcrypt.hash(single.password,10)
//               const newuser=await prisma.farmer.update({where:{id:single.id},data:{password:hashedpassword}})
//               console.log(newuser)
//             })}
//       }catch (error) {
//           console.error("Error in encryptfarmerpassword function:", error);
//       }
//   }
  
//   encryptfarmerpasswords()
  
  



// async function resetAllPasswords() {
//     try {
//       let counter = 1;
  
//       // Buyers
//       const buyers = await prisma.buyer.findMany();
//       for (const buyer of buyers) {
//         const newPassword = `unhashed_password${counter++}`;
//         await prisma.buyer.update({
//           where: { id: buyer.id },
//           data: { password: newPassword },
//         });
//         console.log(`Updated buyer ${buyer.id} password to ${newPassword}`);
//       }
  
//       // Suppliers
//       const suppliers = await prisma.supplier.findMany();
//       for (const supplier of suppliers) {
//         const newPassword = `unhashed_password${counter++}`;
//         await prisma.supplier.update({
//           where: { id: supplier.id },
//           data: { password: newPassword },
//         });
//         console.log(`Updated supplier ${supplier.id} password to ${newPassword}`);
//       }
  
//       // Users
//       const farmers = await prisma.farmer.findMany();
//       for (const user of farmers) {
//         const newPassword = `unhashed_password${counter++}`;
//         await prisma.farmer.update({
//           where: { id: user.id },
//           data: { password: newPassword },
//         });
//         console.log(`Updated user ${user.id} password to ${newPassword}`);
//       }
  
//       console.log(" All passwords reset successfully.");
//     } catch (error) {
//       console.error(" Error resetting passwords:", error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   }
  
//   resetAllPasswords();
  



// ..............................................................
// async function findUserByEmail(email:string){
//   return await mysqlPrisma.user.findUnique({where:{email:email} })}
    
    
// async function findById(id:number){
//     return await mysqlPrisma.user.findUnique({where:{id:id} })}

// function initialize(passport:any){

//   const authenticate=async (email:string,password:string,done:any)=>{
//       const myuser= await findUserByEmail(email)

//       if (!myuser ){
//           return done(null,false,{message:'no such user'})}
      
//           const isPasswordCorrect = await bcrypt.compare(password, myuser.password);

//           if (isPasswordCorrect) {
//               return done(null, myuser);
//           } else {
//               return done(null, false, { message: 'Password incorrect' });
//           }
//   }
    
//   passport.use(new LocalStrategy({usernameField:'email'},authenticate))
//   passport.serializeUser((user:any,done:any)=>{done(null,user.id)})
//   passport.deserializeUser(async(id:number,done:any)=>{
//     try {
//       const user = await findById(id);
//       done(null, user);
//     } catch (err) {
//       done(err, null);
//     }})}
    
// function checkAuth(req:Request,res:Response,next:any){
//   if (req.isAuthenticated()){return next()}
  
//   return res.status(401).json({ message: "Unauthorized. Please log in." }); 
// }

// function notAuth(req:Request,res:Response,next:any){
//   if (req.isAuthenticated()){ 
//     return res.status(403).json({ message: "Already logged in." });}
//   return next()
// }
// app.post("/login",notAuth, (req: Request, res: Response,next) => {
//   passport.authenticate('local',(err:any, user:User) => {
//     if (err) return next(err);
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });
//     req.logIn(user, (err) => {
//       if (err) return next(err);
//       res.json({ success: true, username: user.firstname }); 
//     });
//   })(req, res, next);
// }
// );

// app.post("/register",notAuth, async(req: Request, res: Response) => {
//   try{
//   const formdata=req.body
//   const existingUser = await mysqlPrisma.user.findUnique({
//     where:{ email: formdata.email },
//   });

//   if (existingUser) {
//      res.status(400).json({ error: "Email already exists. Please log in or use another email." });
//      return
//   }
//   const hashedpassword=await bcrypt.hash(formdata.password,10)
//   formdata.password=hashedpassword
//   const userdata=await mysqlPrisma.user.create({data:formdata})
//   res.status(201).json({message:`success,account created for:${userdata.firstname}`});
//    return}
//   catch(error){
//     if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
//       res.status(400).json({ error: "Email already exists. Please use a different one." });
//     return}
//     console.error("server error in registration:",error);
//      res.status(500).json({message:"Internal server error"});
//   }finally {
//     await mysqlPrisma.$disconnect();
//   }
// });
// app.delete("/logout", (req: Request, res: Response, next) => {
  
    
//     req.session.destroy((err) => {
//       if (err) {return `server error, ${err}`}
//       res.status(200).json({ message: "Logged out successfully" });});
//   });

// app.get("/auth-status", (req, res) => {
//   res.json({
//     isLoggedin: req.isAuthenticated(),
//     username: req.isAuthenticated() ? (req.user as User).firstname : null
//   });
// });
// app.get('/home',async(req,res)=>{
//   try{
//     let username=(req.user as User)?.firstname||'guest'
    
//     const destinations = await mongodbPrisma.destination.findMany();
//     const reviews = await mongodbPrisma.review.findMany();
   
//     res.json({destinations,reviews,username});
//     console.log('destinations sent')
//   }catch(error){
//     console.error("Error in /home",error);
//     res.status(500).json({message:"Internal server error"});
//   }finally {
//     await mongodbPrisma.$disconnect();
//   }
// });

// app.get('/destinations/:id',async(req: Request, res: Response)=>{
//   try{
//     const destinationid=req.params.id
//     const mydestination = await mongodbPrisma.destination.
//     findUnique({ where: { id: destinationid },include: { review: true },  });
//     res.json({mydestination});
//     console.log('description and review sent')
//   }catch(error){
//     console.error("Error in /destinations",error);
//     res.status(500).json({message:"Internal server error"});
//   }finally {
//     await mongodbPrisma.$disconnect();
//   }
// });

// app.get('/booking/:city',checkAuth,async(req: Request, res: Response)=>{
//   try{
//     const city=req.params.city
//     if (!city || typeof city !== 'string') {
//       res.status(400).json({ error: "Invalid city parameter" });}
      
//     const [flights, hotels, transportation] = await Promise.all([
//       mysqlPrisma.flight.findMany({ where: { destination: city } }),
//       mysqlPrisma.hotel.findMany({ where: { city: city } }),
//       mysqlPrisma.transport.findMany({ where: { origin: city } })
//     ]);
   
//     res.json({ flights, hotels, transportation });
//   }catch(error){
//     console.error("Error in /booking",error);
//     res.status(500).json({message:"Internal server error"});
//   }/*finally {
//     await mysqlPrisma.$disconnect();
//   }*/
// });
// app.post('/order',checkAuth,async(req: Request, res: Response)=>{
//   try{
//     const neworder = req.body; 
//     if (!neworder || typeof neworder !== 'object') {
//     res.status(400).json({ error: "Invalid order data" });
//     return}
//     if (!req.user){res.status(401).json({ error: "please log in to place booking" });
//     return}
//     const myorder={userid:(req.user as User).id, flightid:neworder.flight.id,
//       transportid:neworder.transport.id, hotelid:neworder.hotel.id, destinationid:neworder.destinationid}

//     await mysqlPrisma.order.create({data:myorder});
//     res.status(201).json({message:"Order created"});
//     console.log(myorder)

//   }catch(error){
//     console.error("Error in /order",error);
//     res.status(500).json({message:"Internal server error"});
//   }/*finally {
//     await mysqlPrisma.$disconnect();}*/
  
// });
// app.get('/profile',checkAuth,async(req:Request,res:Response)=>{
//   try{
//     const myuser=await mysqlPrisma.user.findUnique({where:{id:(req.user as User).id},
//     select:{firstname:true,lastname:true,email:true,phone:true}})
//     console.log(req.user)
//     res.status(200).json({myuser})
//   }catch(error){
//     res.json({message:`server error, ${error}`})
//   }})

// app.delete('/profile',checkAuth,async(req:Request,res:Response)=>{
//   try{
//     const myuser=req.user as User
//     req.session.destroy((err) => {
//     if (err) {
//       res.status(500).json({message:`server error, ${err.message}`})}})

//     const olduser=await mysqlPrisma.user.findUnique({where:{id:myuser.id},
//     select:{firstname:true,lastname:true,email:true,phone:true}})

//     if (!olduser) {
//       res.status(404).json({ message: "User not found" });}
//     else {
//     const moveuser=await mysqlPrisma.deletedUser.create({data:olduser})
//     if(!moveuser){
//       res.status(500).json(`error archiving user`)}
//     else{
//       await mysqlPrisma.user.delete({where:{id:myuser.id}})
//       res.status(200).json({ message: "user deleted successfully" })
//     }}
    
//   }catch(error:any){
//     console.error("Unexpected server error:", error);
//     res.json({message:`unexpected server error, ${error.message}`})
//   }
// })
// app.patch('/profile',checkAuth,async(req:Request,res:Response)=>{
//   try{
//     const myuser=req.user as User
//     const newdata=req.body
//     const updateprofile=await mysqlPrisma.user.updateMany(
//       {where:{id:myuser.id},data:newdata})
      
//     if (!updateprofile){
//       res.status(500).json('update failed,')}
//   }
//   catch(error){res.json(`server error,${error}`)}
// })
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });