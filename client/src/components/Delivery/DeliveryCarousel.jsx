import React from 'react';
import Slider from "react-slick";



//components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow,PrevArrow } from '../CarouselArrow';

 const DeliveryCarousel = () => {
  
     const categories=[{
            image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title:"Pizza",
            },
            {
                image:"https://b.zmtcdn.com/data/o2_assets/ed46747c7190faad723bc755db52743e1632716602.png",
                title:"Kadhi",
            },
            {
                image:"https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
                title:"Chicken",
            },
            {
                image:"https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
                title:"burger",
            },
            {
                image:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
                title:"Biryani",
            },
            {
                image:"https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
                title:"Chat",
            },
            {
                image:"https://b.zmtcdn.com/data/o2_assets/54a0bbb5a8b41f42d202a5ceebd842141632716601.png",
                title:"ice-cream",
            },
            {
                image:"https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
                title:"Cake",
            },
    ];

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };

    return (
        <>
           <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1> 
           <div className="lg:hidden flex flex-wrap gap-3 lg:gap-0 justify-between ">
                {
                    categories.map((food)=>(
                        <DeliveryCategory {...food}/>  
                    ))
                }
             
           </div>
           <div className="hidden lg:block">
               <Slider {...settings}>
               {
                    categories.map((food)=>(
                        <DeliveryCategory {...food}/>  
                    ))
                }
               </Slider>
           </div>
        </>
    );
}

export default DeliveryCarousel;