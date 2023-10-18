import React, { useState } from "react";
import FoodData from "../Food Data/FoodData";
import CardSection from "./CardSection";
const NavigationSection = () => {
  //useState to set foodData 
  const [foodData , setFoodData] = useState(FoodData);
  return (
    <div>
      <div className="NavigationSection">
        <button onClick={()=>(setFoodData(FoodData))}>All</button>
        <button id="filter-btn-1" onClick={()=>(setFoodData(FoodData.filter((val)=>(val.category === "breakfast"?val:""))))}>Breakfast</button>
        <button id="filter-btn-2" onClick={()=>(setFoodData(FoodData.filter((val)=>(val.category === "lunch"?val:""))))}>Lunch</button>
        <button id="filter-btn-3" onClick={()=>(setFoodData(FoodData.filter((val)=>(val.category === "shakes"?val:""))))}>Shakes</button>
      </div>
      <div id="main">
        <CardSection Fooddata={foodData} />
      </div>
    </div>
  );
};

export default NavigationSection;
