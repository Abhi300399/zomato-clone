//Libraries
import express from "express";
import passport from "passport";

//Database model
import {RestaurantModel} from "../../database/allModels";



//Validation
import { ValidateRestaurantCity,ValidateRestaurantSearchString } from "../../validation/restuarant";
import { ValidateRestaurantId } from "../../validation/food";


const Router=express.Router();

/*
Route     /
Des       get all restuarant details based in city
Params    none
Access    Public
Method    GET  
*/

Router.get("/",async(req,res)=>{
    try{
            await ValidateRestaurantCity(req.query)
            const {city}=req.query;
            const restuarants=await RestaurantModel.find({city});
            return res.json({restuarants});
    }catch (error){
            return res.status(500).json({error:error.message});
    }
});

/*
Route     /
Des       get individual restuarant details based on id
Params    id
Access    Public
Method    GET  
*/

Router.get("/:_id",async(req,res)=>{
    try{
        await ValidateRestaurantId(req.params);
        const {_id}=req.params;
        const retuarant=await RestaurantModel.findOne(_id);
        if(!restuarant)  return res.status(404).json({error:"Restuarant not Found"});

        return res.json({restuarant});
    } catch(error){
        return res.status(500).json({error:error.message});
    }
}
);

/*
Route     /search
Des       get restuarant details based on search string
Params    none
Body      search string
Access    Public
Method    GET  
*/

Router.get("/search",async(req,res)=>{
    try{
        await ValidateRestaurantSearchString(req.body);
        const {searchString}=req.body;
        const restuarants=await RestaurantModel.find({name:{ $regex:searchString,$options:"i"}});
        if(!restuarants)  return res.status(404).json({error:`No Restuarant  matched with ${searchString}`});

        return res.json({restuarants});
    } catch(error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;

