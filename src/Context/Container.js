import React, { useState } from "react";
import { MyContext } from "./MyContext";

export default function Container(props) {
  /* animation */
  const [displayDescription, setDisplayDescription] = useState(false);
  /* lake */
  const [boxNumbering, setBoxNumbering] = useState([]);
  /* box */
  /* const { id, date, text } = props.entry; */
  const [display, setDisplay] = useState("block");
  const [playState, setPlayState] = useState("running");
  const [opacity, setOpacity] = useState("rgba(255, 201, 130, 0.5)");
  const [zIndex, setZIndex] = useState("10");

  /* text */
  /* const { textId, textDate, text } = props.location.state; */

  let context = {
    displayDescription,
    setDisplayDescription,
    boxNumbering,
    setBoxNumbering,
    display,
    setDisplay,
    playState,
    setPlayState,
    opacity,
    setOpacity,
    zIndex,
    setZIndex,
  };

  return (
    <MyContext.Provider value={context}>{props.children}</MyContext.Provider>
  );
}
