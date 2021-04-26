import React, { useState, useEffect } from "react";
import "./Lake.css";
import "./Box.css";
import Box from "./Box";

export default function Lake(props) {
  const [boxNumbering, setBoxNumbering] = useState([]);

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
        return (
          <Box
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
