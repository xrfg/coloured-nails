import React from "react";
import "../../Sass/Reset.scss";
import "../../Sass/TextComponent.scss";

export default function TextComponent(props) {
  const { textDate, text } = props.location.state;

  return (
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target.className === "overlay") props.history.goBack();
      }}
    >
      <section className="background2-1 text-component-card">
        <main className="content-container text-component-card__content">
          <div className="blob">
            <p className="blob__text">{text}</p>
            <p className="blob__date">{textDate}</p>
          </div>
          <div
            className="text-component-card__content__closing-btn"
            onClick={() => props.history.goBack()}
          >
            <span>(X)</span>
          </div>
        </main>
      </section>
    </div>
  );
}
