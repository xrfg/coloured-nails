import React from "react";
import Animation from "./Components/Animation";
import "./Components/Reset.css";
import "./App.scss";
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
