import React,{useState} from "react";


const Navbar = ({setSelected}) => {
  


    return(
        <div className="navbar">
            <h1>Our Menu</h1>
            <div className="sub-menu">
                <p
                onClick={()=>setSelected("all")}
                > All </p>
                <p onClick={()=>setSelected("breakfast")}> Breakfast </p>
                <p
                onClick={()=>setSelected("lunch")}
                > Lunch </p>
                <p
                onClick={()=>setSelected("shakes")}
                > Shakes </p>
            </div>
        </div>
    )
}

export default Navbar;