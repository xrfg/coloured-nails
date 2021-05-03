import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import "../../Sass/Footer.scss";

export default function Footer() {
  const { displayDescription, setDisplayDescription } = useContext(MyContext);
  return (
    <footer className="background4">
      <section className="content-container footer-container">
        <span className="footer-description">coloured nails is &rarr;</span>
        <div
          style={{ display: displayDescription }}
          onClick={() => setDisplayDescription(!displayDescription)}
          className="footer-screen"
        ></div>
      </section>
    </footer>
  );
}
