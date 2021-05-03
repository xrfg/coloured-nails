import React from "react";
import "../../Sass/Reset.scss";
import "../../Sass/Animation.scss";
import Lake from "./Lake";
import { Route } from "react-router-dom";
import TextComponent from "./TextComponent";

export default function Animation() {
  const lakes = ["one", "two", "three"];

  return (
    <div className="page">
      <Route path="/:id" component={TextComponent} />

      <div className="universe">
        <main>
          <div className="galaxy">
            <div className="lake">
              {lakes.map((lake) => {
                return <Lake lakeNumber={lake} key={lake} />;
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
