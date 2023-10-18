import React,{useState} from "react";
import MenuDisplay from "./MenuDisplay";
import Navbar from "./Navbar";

import "../styles/App.css";





const App = () => {
  const [selected,setSelected] = useState("all");
   console.log(selected); 
  return(
    <div>
      <Navbar setSelected={setSelected}/>
      <MenuDisplay selected={selected}/>
    </div>
  )
}

export default App;
