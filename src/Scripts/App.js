import React, { useState, useEffect } from "react";
import Animation from "./Components/Animation";
import "../Sass/Reset.scss";
import { BrowserRouter } from "react-router-dom";
import Description from "./Components/Description";
import "../Sass/Footer.scss";

function App() {
  const [displayItem, setDisplayItem] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Animation />
          <footer className="background4">
            <section className="content-container footer-container">
              <span className="footer-description">
                coloured nails is &rarr;
              </span>
              <div
                style={{ display: displayItem }}
                onClick={() => setDisplayItem(!displayItem)}
                className="footer-screen"
              ></div>
            </section>
          </footer>

          {displayItem && (
            <div className="description-overlay">
              <section className="background2-2 description-component">
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
                    in the spawn of a few days between december 2019 and january
                    2020, in greece.
                  </p>
                </div>
                {}
                <button onClick={() => setDisplayItem(!displayItem)}>X</button>
              </section>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
