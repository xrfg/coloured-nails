import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import "../../Sass/Box.scss";

export default function Box(props) {
  const [textId] = useState(props.textId);
  const [textDate] = useState(props.textDate);
  const [text] = useState(props.text);

  const [display, setDisplay] = useState("block");

  const [playState, setPlayState] = useState("running");

  // after 13 clicked times, hide the lakes
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <Link
      onMouseOver={() => {
        setPlayState("paused");
      }}
      onMouseOut={() => {
        setPlayState("running");
      }}
      onClick={() => {
        setDisplay("none");
        increment();
      }}
      to={{
        pathname: `/box/${textId}`,
        state: { textId: textId, textDate: textDate, text: text },
      }}
      className={`box lake__${props.numberOfLake}__box box-${props.boxNum}`}
      style={{
        animationPlayState: playState,
        animationDelay: props.animationDelay,
        zIndex: "10",
        display: display,
      }}
    >
      {text}
    </Link>
  );
}
