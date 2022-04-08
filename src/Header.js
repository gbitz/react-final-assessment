import React from "react";
import "./Header.css";

function Header({name, imageSrc, birthday}) {
  return (
    <div className="full-header">
      <img src={imageSrc}></img>
      <div className="group">
        <p>{name}</p>
        <p style={{fontSize:"60px"}}>{birthday}</p>
      </div>
    </div>
  );
}

export default Header;
