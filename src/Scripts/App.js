import React, { useState } from "react";
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

          {displayItem && <Description />}

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
            {/* space */}
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
