import React, { useState } from "react";
import "../../Sass/Reset.scss";
import "../../Sass/TextComponent.scss";

export default function TextComponent(props) {
  const { textId, textDate, text } = props.location.state;

  return (
    <section style={{ zIndex: "100" }} className="background2 text-component">
      <header className="header">
        <div className="nav-bubble">
          <span onClick={() => props.history.goBack()}>🍀</span>
        </div>
      </header>

      <div>
        <main className="content-container">
          <div className="blob">
            <p className="blob__text">{text}</p>
          </div>
        </main>
      </div>
    </section>
  );
}
