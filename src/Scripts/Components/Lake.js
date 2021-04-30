import React, { useState, useEffect } from "react";
import "../../Sass/Lake.scss";
import "../../Sass/Box.scss";
import Box from "./Box";
/* import textList from "../../json/texts.json"; */
import { data } from "../../data/data.js";

export default function Lake(props) {
  const [boxNumbering, setBoxNumbering] = useState([]);

  /*  const [textData] = useState(data); */

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
    <div className={`lake__${props.lakeNumber} plane`}>
      {boxNumbering.map((box, i) => {
        console.log("RENDERING ONE MAP");
        const count = box;
        console.log(count, i);
        return (
          <Box
            text={data[i].text}
            textId={data[i].id}
            textDate={data[i].date}
            numberOfLake={props.lakeNumber}
            boxNum={box}
            key={box}
            animationDelay={i + 1 + "s"}
          />
        );
      })}
    </div>
  );
}
