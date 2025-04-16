import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {ProductType, Unit, ProductStatus,Farmer,farmersData,Review,reviewsData,Supplier,suppliersData,Buyer,buyersData,Product,productsData} from "./data";
import { PrismaClient } from "../generated/prisma";
import { Prisma } from "@prisma/client";

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

app.use(passport.initialize())
app.use(passport.session()) 


console.log('server running')
