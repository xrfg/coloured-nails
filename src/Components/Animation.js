import React from "react";
import "./Reset.css";
import "./Animation.css";
import Lake from "./Lake";

export default function Animation() {
  const lakes = ["one", "two", "three"];
  return (
    <div>
      <main className="page universe">
        <div className="content-container galaxy">
          <div className="lake">
            {lakes.map((lake) => {
              return <Lake lakeNumber={lake} key={lake} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
