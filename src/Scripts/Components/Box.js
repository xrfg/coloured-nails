import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Sass/Box.scss";
export default function Box(props) {
  const { id, date, text } = props.entry;

  const [display, setDisplay] = useState("block");

  const [playState, setPlayState] = useState("running");
  const [opacity, setOpacity] = useState("rgba(255, 201, 130, 0.5)");
  const [zIndex, setZIndex] = useState("10");

  const fullText = text.split(" ");
  const firstWord = `${fullText[0]}`;

  return (
    <Link
      to={{
        pathname: `/${id}`,
        state: {
          textId: id,
          textDate: date,
          text: text,
        },
      }}
    >
      <li
        className={`box lake__${props.numberOfLake}__box box-${props.boxNum}`}
        onMouseOver={() => {
          setPlayState("paused");
          setOpacity("rgb(250, 231, 207)");
          setZIndex("20");
        }}
        onMouseOut={() => {
          setPlayState("running");
          setOpacity("rgba(255, 201, 130, 0.5)");
          setZIndex("10");
        }}
        onClick={() => {
          setDisplay("none");
        }}
        style={{
          animationPlayState: playState,
          backgroundColor: opacity,
          zIndex: zIndex,
          display: display,
        }}
      >
        <span>{firstWord.toUpperCase()}</span>
      </li>
    </Link>
  );
}
