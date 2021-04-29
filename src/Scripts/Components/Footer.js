import React from "react";
import { Link } from "react-router-dom";
import "../../Sass/Footer.scss";
import "../../Sass/Reset.scss";

export default function Footer() {
  return (
    <footer className="background4">
      <section className="content-container">
        <span className="footer-description">coloured nails is &rarr;</span>
        <Link to="/description" className="footer-screen"></Link>
      </section>
    </footer>
  );
}
