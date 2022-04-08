import React from "react";
import "./Activity.css";

function Activity({time, description, index}) {
  return (
    <li key={index}>
      <span style={{justifyContent: "flex-end"}}>{time}</span> <span style={{justifyContent: "center"}}>{description}</span>
    </li>
  );
}

export default Activity;
