import React from "react";
import Animation from "./Components/Animation";
import "../Sass/Reset.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Animation />

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
