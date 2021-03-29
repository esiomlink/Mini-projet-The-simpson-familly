import React from "react";
import "../css/ReactifComponent.css";

const ReactifComponent = ({ name, age }) => {
  return (
    <div className="reactif">
      <h2>
        Hello From My reactif component , <br />
        My name is {name} and i have {age} year old!!!🎂
      </h2>
    </div>
  );
};

export default ReactifComponent;
