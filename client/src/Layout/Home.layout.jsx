import React from "react";

//Components
import Navbar from "../components/Navbar";
import Foodtab from "../components/FoodTab";


const HomeLayout=(props)=>{
    return <>
    <Navbar />
    <div className="container mx-auto px-4 lg:px-20">
            {props.children}
    </div>
    <Foodtab/>
        
    </>;
}

export default HomeLayout;