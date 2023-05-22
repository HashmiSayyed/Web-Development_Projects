import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar test={props.img} />
      </div>
      <div className="bottom">
        <Details test={props.tel} />
        <Details test={props.email} />
      </div>
    </div>
  );
}

export default Card;
