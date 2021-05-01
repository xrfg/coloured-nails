import React from "react";
import { Route } from "react-router-dom";
import "../../Sass/Reset.scss";
import "../../Sass/TextComponent.scss";
import Description from "./Description";

export default function TextComponent(props) {
  const { textId, textDate, text } = props.location.state;
  console.log(textId, textDate, text);
  return (
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target.className === "overlay") props.history.goBack();
      }}
    >
      <Route path="/box/:textId/description" component={Description} />
      <section
        style={{ zIndex: "100" }}
        className="background2-1 text-component"
      >
        <div>
          <main className="content-container">
            <div className="blob">
              <p className="blob__text">{text}</p>
              <p className="blob__date">{textDate}</p>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
