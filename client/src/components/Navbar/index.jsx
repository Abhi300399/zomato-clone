import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";
const MobileNav=()=>{
        return (
            <div className="flex items-center justify-between w-full lg:hidden">
                  <div className="w-28">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
                  </div>
                <div className="flex items-center gap-3">
                     <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                        <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                            <FaUserAlt/>
                        </span>
                </div>
            </div>
        )
};

const LargeNav=()=>{
    return <>
        <div className="hidden lg:inline container px-20 mx-auto">
        <div className="hidden gap-4 lg:flex w-full items-center justify-around">
                 <div className="w-28">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
                 </div>
                 <div className="w-3/4 bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3">
                     <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-400"><HiLocationMarker/></span>
                        <input type="text" placeholder="Benguluru"  className="focus:outline-none"/>
                        <IoMdArrowDropdown/>
                     </div>
                     <div className="flex items-center gap-2 w-full">
                         <RiSearch2Line/>
                         <input type="search" placeholder="Search for restuarant,cuisine or a dish" className="w-full focus:outline-none"/>
                     </div>
                 </div>
                     <div className="ml-28 flex gap-4">
                     <button className="text-gray-500 hover:text-gray-800 text-xl">Login</button>
                     <button className="text-gray-500 hover:text-gray-800 text-xl">Signup</button>
                     </div>
        </div>
        </div>
    </>;
}



const Navbar=()=>{
    return (<>
        <nav className="p-4 flex items-center bg-white shadow-md lg:shadow-none w-full">
                 <MobileNav />
                 <LargeNav />
        </nav>
    </>
    );
};

export default Navbar;