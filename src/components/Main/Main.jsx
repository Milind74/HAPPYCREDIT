import React from "react";
import "./Main.css"
import Leftside from "../Leftside/Leftside"
import Rightside from "../Rightside/Rightside";
import { Footer } from "../Footer/Footer";

function Main() {
  return (
    <>
    <div className="mainContainer">
<Leftside/>  
<Rightside/>   
    </div>
    <Footer/>
    </>
  );
}

export default Main;
