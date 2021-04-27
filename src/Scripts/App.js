import React from "react";
import Animation from "./Components/Animation";
import "../Sass/Reset.scss";
import "../Sass/App.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Animation />
      </div>
    </BrowserRouter>
  );
}

export default App;
