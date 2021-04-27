import React, { useState } from "react";
import "../../Sass/TextComponent/TextComponent.scss";

export default function TextComponent(props) {
  const { textId, textDate, text } = props.location.state;

  return (
    <section className="background2 text-component-page">
      <header className="header">
        <div className="nav-bubble div-random-link">
          <a href="/">🍀</a>
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
