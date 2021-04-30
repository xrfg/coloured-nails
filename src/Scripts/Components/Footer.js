import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Sass/Footer.scss";
import "../../Sass/Reset.scss";
import Description from "./Description";

export default function Footer() {
  const [displayItem, setDisplayItem] = useState(false);

  return (
    <footer className="background4">
      <section className="content-container footer-container">
        <span className="footer-description">coloured nails is &rarr;</span>
        <div
          style={{ display: displayItem }}
          onClick={() => setDisplayItem(!displayItem)}
          /* to="/description" */
          className="footer-screen"
        >
          {displayItem && <Description />}
        </div>
      </section>
    </footer>
  );
}
