import React, { useState } from "react";
import "../../Sass/Reset.scss";
import "../../Sass/TextComponent.scss";

export default function TextComponent(props) {
  const { textId, textDate, text } = props.location.state;
  return (
    <div
      className="overlay"
      onClick={(e) => {
        console.log(e.target);
        if (e.target.className === "overlay") props.history.goBack();
      }}
    >
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
