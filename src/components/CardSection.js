import React from "react";
import Card from "./Card";
// console.log(Fooddata);

const CardSection = ({Fooddata}) => (
  <div className="CardSection" data-test-id={`menu-item-`+ Fooddata[0].category}>
    {Fooddata.map((val) => (
      <Card key={val.id} img={val.img} title={val.title} price={val.price} desc={val.desc}/>
    ))}
  </div>
);

export default CardSection;
