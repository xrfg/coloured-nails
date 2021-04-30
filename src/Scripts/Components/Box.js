import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Sass/Box.scss";

export default function Box(props) {
  const [textId] = useState(props.textId);
  const [textDate] = useState(props.textDate);
  const [text] = useState(props.text);

  const [display, setDisplay] = useState("block");

  const [playState, setPlayState] = useState("running");
  const [opacity, setOpacity] = useState("rgba(255, 201, 130, 0.5)");
  const [zIndex, setZIndex] = useState("10");

  /*  const [click, setClick] = useState(0); */
  return (
    <Link
      onMouseOver={() => {
        setPlayState("paused");
        setOpacity("rgba(255, 233, 204, 1)");
        setZIndex("20");
      }}
      onMouseOut={() => {
        setPlayState("running");
        setOpacity("rgba(255, 201, 130, 0.5)");
        setZIndex("10");
      }}
      onClick={() => {
        setDisplay("none");
        /* setClick(() => click + 1); */
      }}
      to={{
        pathname: `/box/${textId}`,
        state: {
          textId: textId,
          textDate: textDate,
          text: text,
        },
      }}
      className={`box lake__${props.numberOfLake}__box box-${props.boxNum}`}
      style={{
        animationPlayState: playState,
        animationDelay: props.animationDelay,
        backgroundColor: opacity,
        zIndex: zIndex,
        display: display,
      }}
    >
      {text}
    </Link>
  );
}
