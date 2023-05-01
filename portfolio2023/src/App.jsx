import { useState } from "react";
import { Header, Hero, About, Skills } from "./Components/Index.js";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
