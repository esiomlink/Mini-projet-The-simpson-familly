import React from "react";
import "../css/Simpson.css";

function Simpson({ firstName, lastName, image }) {
  return (
    <div className="card">
      <img className="avatar" src={image} alt="avatar" />
      <h2>
        My name is {firstName} {lastName}
      </h2>
    </div>
  );
}
export default Simpson;
