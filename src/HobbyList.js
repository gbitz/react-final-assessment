import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  if (hobbies.length) {
    const listItems = hobbies.map((hobby, index) => {
      return (
        <li key={index}>{hobby}</li>
      );
    })
    return (
      <div>
    <h4>Hobbies</h4>
    <ul>
      {listItems}
    </ul> 
    </div>
    )
  } else {
    return null;
  }

}

export default HobbyList;
