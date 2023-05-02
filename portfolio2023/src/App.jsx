import { useState } from "react";
import {
  Header,
  Hero,
  About,
  Skills,
  Portfolio,
  Contact,
} from "./Components/Index.js";

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
        <Contact />
      </div>
    </>
  );
}

export default App;
