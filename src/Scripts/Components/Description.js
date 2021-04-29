import React from "react";
import "../../Sass/Reset.scss";
import "../../Sass/Description.scss";

export default function Description(props) {
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
        className="background2-2 description-component"
      >
        <div className="blob">
          <p className="blob__text">
            'coloured nails' is a collection of texts co-written by{" "}
            <a href="https://www.instagram.com/slantedroof2000/">mar correia</a>{" "}
            and{" "}
            <a href="https://www.instagram.com/lavendersweatexcess">
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
