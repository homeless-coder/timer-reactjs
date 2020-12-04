import React from "react";
import { Navbar, Footer, Timer } from "./components";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar title="Timer" />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
