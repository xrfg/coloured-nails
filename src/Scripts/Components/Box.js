import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import "../../Sass/Box.scss";
import TextComponent from "./TextComponent";

export default function Box(props) {
  const [textId] = useState(props.textId);
  const [textDate] = useState(props.textDate);
  const [text] = useState(props.text);
  return (
    <Link
      to={{
        pathname: `/box/${textId}`,
        state: { textId: textId, textDate: textDate, text: text },
      }}
      className={`box lake__${props.numberOfLake}__box box-${props.boxNum}`}
      style={{ animationDelay: props.animationDelay, zIndex: "10" }}
    >
      {text}
    </Link>
  );
}
