import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Sass/Box.scss";

export default function Box(props) {
  /* const [textId] = useState(props.entry.id);
  const [textDate] = useState(props.entry.date);
  const [text] = useState(props.entry.text); */

  const { id, date, text } = props.entry;

  const [display, setDisplay] = useState("block");

  const [playState, setPlayState] = useState("running");
  const [opacity, setOpacity] = useState("rgba(255, 201, 130, 0.5)");
  const [zIndex, setZIndex] = useState("10");

  const fullText = text.split(" ");
  const firstThreeWords = `${fullText[0]} ${fullText[1]} ${fullText[2]}`;

  return (
    <Link
      to={{
        pathname: `/box/${id}`,
        state: {
          textId: id,
          textDate: date,
          text: text,
          /* textObj: props.entry */
        },
      }}
    >
      <li
        className={`box lake__${props.numberOfLake}__box box-${props.boxNum}`}
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
        }}
        style={{
          animationPlayState: playState,
          /* animationDelay: props.animationDelay, */
          backgroundColor: opacity,
          zIndex: zIndex,
          display: display,
        }}
      >
        {firstThreeWords}
      </li>
    </Link>
  );
}
