import React, { useState } from "react";
import "../../Sass/Reset.scss";
import "../../Sass/Description.scss";

export default function Description() {
  return (
    <div
      className="overlay"
      /* style={{ display: displayItem }}
      onClick={(e) => {
        console.log(e.target.className);
        if (e.target.className === "overlay") props.history.goBack();
      }} */
    >
      <section
        style={{ zIndex: "100" }}
        className="background2-2 description-component"
      >
        <div className="blob">
          <p className="blob__text">
            'coloured nails' is a collection of texts co-written by{" "}
            <a
              rel="noreferrer"
              href="https://www.instagram.com/slantedroof2000/"
              target="_blank"
            >
              mar correia
            </a>{" "}
            and{" "}
            <a
              rel="noreferrer"
              href="https://www.instagram.com/lavenderexcesssweat"
              target="_blank"
            >
              henrique martins
            </a>{" "}
            in the spawn of a few days between december 2019 and january 2020,
            in greece.
          </p>
        </div>
      </section>
    </div>
  );
}
