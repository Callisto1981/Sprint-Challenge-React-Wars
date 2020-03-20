import React from "react";

const Card = props => {
  return (
    <div>{props.name}</div>
    <div>{props.height}</div>
    <div>{props.mass}</div>
  );
};

export default Card;
