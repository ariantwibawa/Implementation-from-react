import React from "react";
import "./Body.css";

const Body = (props) => {
  return (
    <div>
      <div className="card mb-3">
        <img src={props.img} />
        <div className="card-body">
          <h5 className="card-title">{props.Title}</h5>
          <p className="card-text">{props.Description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 29 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
