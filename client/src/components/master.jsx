import React from 'react';
import { useParams } from 'react-router-dom';
import Delivery from './Delivery';


export const Master = () => {
    const {type}= useParams();
    return (
        <div className="my-5">
           {type==="delivery" && <Delivery/>} 
        </div>
    );
}

export default Master;