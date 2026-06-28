import React, { useEffect } from "react";


const Navbar = ({ color }) => { // this one will triger on every reload // CASE - 0
  useEffect(() => {
    alert("Welcome to my page , i will run on every render");
  }); //this one we use when we want something should happen only once when app loads

  useEffect(() => {
    alert("this is my first render");
  }, []);

  useEffect(() => {
    alert("i am running because color was changed");
  }, [color]);

  //example of clean function 
   useEffect(() => {
    alert("Welcome to my page, this is my first render of app.jsx");
    return ()=> {
      alert("component was unmounted")
    }
  }, []);

  return <div>i am a navbar of {color} color</div>;
};

export default Navbar;
