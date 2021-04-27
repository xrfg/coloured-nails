import React from "react";
import { Link, Route } from "react-router-dom";
import "./Box.scss";

export default function Box(props) {
  return (
    <Link
      to="/"
      className={`box lake__${props.numberOfLake}__box box-${props.boxNum}`}
      style={{ animationDelay: props.animationDelay }}
    ></Link>
  );
}
