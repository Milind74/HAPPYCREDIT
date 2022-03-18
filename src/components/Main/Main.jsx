import React from "react";
import "./Main.css"
import Leftside from "../Leftside/Leftside"
import Rightside from "../Rightside/Rightside";

function Main() {
  return (
    <div className="mainContainer">
<Leftside/>  
<Rightside/>   
    </div>
  );
}

export default Main;
