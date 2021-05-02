import React, { useState } from "react";
import "../../Sass/Footer.scss";
import "../../Sass/Reset.scss";
import Description from "./Description";

export default function Footer() {
  const [displayItem, setDisplayItem] = useState(false);
  console.log(displayItem);
  console.log("I DONT KNOW");
  return (
    <footer className="background4">
      <section className="content-container footer-container">
        <span className="footer-description">
          {displayItem ? `coloured nails is` : "back to pool"} &rarr;
        </span>
        <div
          style={{ display: displayItem }}
          onClick={() => {
            setDisplayItem(!displayItem);
          }}
          /* to="/description" */
          className="footer-screen"
        >
          {displayItem && <Description />}
        </div>
      </section>
    </footer>
  );
}
