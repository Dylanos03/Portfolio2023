import { useState } from "react";
import { Header, Hero, About, Skills, Portfolio } from "./Components/Index.js";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
