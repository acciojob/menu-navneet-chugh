import React,{useState} from "react"; 
import menuItems from "../data/menuItems";

const MenuDisplay = ({selected}) =>{
    // const [dishes,setDishes] = useState(menuItems);

    // setDishes(menuItems.filter(menu => menu.category === selected))
    
   

    return(
        <div className="food-card">
           {
            menuItems.map(menu => (
               
                (menu.category === selected || selected==="all") && (
                    <div className="food-card-item">
                    <h1>{menu.title}</h1>
                    <p>{menu.price}</p>
                    <p>{menu.desc}</p>
                   </div>
                )
                


            ))
           }
            
        </div>
    )

}

export default MenuDisplay;



// a>b && a>c


