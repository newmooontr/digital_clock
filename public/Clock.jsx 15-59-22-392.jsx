import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo1.png"


const Clock = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div style={{color:"white"}}>
       
      <h1 style={{ margin: "80px" }}>DİGİTAL CLOCK</h1>
      <img src={logo1}  />
      <h2
        style={{
          fontSize: "60px",
          margin: "60px",
          fontFamily: "Montserrat,sans-serif",
        }}
      >
        {clock}
      </h2>
    </div>
  );
};

export default Clock;
