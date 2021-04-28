import React, { useState, useEffect } from "react";
import "../../Sass/Lake.scss";
import "../../Sass/Box.scss";
import Box from "./Box";
import textList from "../../json/texts.json";

export default function Lake(props) {
  const [boxNumbering, setBoxNumbering] = useState([]);

  const [textData] = useState(textList);

  /*  const [playState, setPlayState] = useState("running"); */

  useEffect(() => {
    // componentDidMount
    switch (props.lakeNumber) {
      case "one":
        setBoxNumbering([13]);
        break;
      case "two":
        setBoxNumbering([12, 11, 10, 9]);
        break;
      case "three":
        setBoxNumbering([8, 7, 6, 5, 4, 3, 2, 1]);
        break;
      default:
        console.log("something wrong");
    }
  }, []);

  return (
    <div
      /* onMouseOver={() => {
        setPlayState("paused");
      }}
      onMouseOut={() => {
        setPlayState("running");
      }} */
      className={`lake__${props.lakeNumber} plane`}
    >
      {boxNumbering.map((box, i) => {
        return (
          <Box
            text={textData[i].text}
            textId={textData[i].id}
            textDate={textData[i].date}
            numberOfLake={props.lakeNumber}
            boxNum={box}
            key={box}
            animationDelay={i + 1 + "s"}
            /* playState={playState} */
          />
        );
      })}
    </div>
  );
}
