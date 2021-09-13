//Importing env variables
require("dotenv").config();


//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport  from "passport";

//import configs
import googleAuthConfig from "./config/gogle.config";

//microservice routes
import Auth from "./API/Auth";

//Database connection
import ConnectDB from "./database/connection";

const zomato=express();

//middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

//passport configuration
googleAuthConfig(passport);

//Application routes
zomato.use("/auth",Auth);


zomato.get("/",(req,res)=>res.json({message:"Setup success"}));

zomato.listen(4000,()=>ConnectDB().then(()=>console.log("server is running")).catch(()=>console.log("Server is running,but database connection failed...")));