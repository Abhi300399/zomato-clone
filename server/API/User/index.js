//Library
import express from "express";
import passport from "passport";

//Models
import {UserModel} from "../../database/allModels";


//Validation
import { ValidateRestaurantId } from "../../validation/food";

const Router=express.Router();

/*
Route   /
Des    Get user data
Params  _id
Access  Public
Method  GET
*/
Router.get("/:_id",async(req,res)=>{
    try{
    await ValidateRestaurantId(req.params);
    const {_id}=req.params;
    const getUser=await UserModel.findById(_id);
   
    return res.json({User:getUser});
}catch(error){
    return res.status(500).json({error:error.message});
}
});

/*
Route   /update
Des    update user data
Params  _id
BODY    User data object
Access  Public
Method  PUT
*/
Router.put("/update/:_id",async(req,res)=>{
    try{
        await ValidateRestaurantId(req.params);
        const {_id}=req.params;
        const {userData}=req.body;
        const updateUserData=await UserModel.findByIdAndUpdate(_id,{
            $set:userData,
        },
        {new:true}
        );
        return res.json({user:updateUserData});
    }catch(error){
    return res.status(500).json({error:error.message});
}
});


export default Router;