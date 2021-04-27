import React from "react";
import { Link, Route } from "react-router-dom";
import "../../Sass/Box.scss";
import TextComponent from "./TextComponent";

export default function Box(props) {
  return (
    <Link
      to="/textcomponent"
      className={`box lake__${props.numberOfLake}__box box-${props.boxNum}`}
      style={{ animationDelay: props.animationDelay, zIndex: "10" }}
    ></Link>
  );
}
