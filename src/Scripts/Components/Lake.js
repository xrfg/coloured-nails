import React, { useState, useEffect } from "react";
import "../../Sass/Lake.scss";
import "../../Sass/Box.scss";
import Box from "./Box";
import { data } from "../../data/data.js";

export default function Lake(props) {
  const [boxNumbering, setBoxNumbering] = useState([]);

  useEffect(() => {
    // componentDidMount
    switch (props.lakeNumber) {
      case "one":
        setBoxNumbering([12]);
        break;
      case "two":
        setBoxNumbering([11, 10, 9, 8]);
        break;
      case "three":
        setBoxNumbering([7, 6, 5, 4, 3, 2, 1, 0]);
        break;
      default:
        console.log("something wrong");
    }
  }, []);

  return (
    <ul className={`lake__${props.lakeNumber} plane`}>
      {boxNumbering.map((box, i) => {
        console.log(`${props.lakeNumber} map`);
        /* console.log(data[box]); */

        return (
          <Box
            entry={data[box]}
            numberOfLake={props.lakeNumber}
            boxNum={box + 1}
            key={box}
            /* animationDelay={i + 1.2 + "s"} */
          />
        );
      })}
    </ul>
  );
}

/* return (
  <div className={`lake__${props.lakeNumber} plane`}>
    {boxNumbering.map((box, i) => {
      console.log(`${props.lakeNumber} map`);

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
); */
