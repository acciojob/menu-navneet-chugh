import React from "react";
import "../styles/App.css";
import HeaderSection from "./HeaderSection";
import NavigationSection from "./NavigationSection";




const App = () => {
  return (
    <div className="App">
        <HeaderSection/>
        <NavigationSection/>
    </div>
  );
};


export default App;