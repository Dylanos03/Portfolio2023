import React from "react";
import "./Header.css";
import { BiPaperPlane } from "react-icons/bi";
import { IconContext } from "react-icons";

function Header() {
  return (
    <div className="Header_whole">
      <h3 className="Header_name">DYLAN O'SULLIVAN</h3>
      <IconContext.Provider
        value={{
          color: "#d2a517",
          className: "global-class-name",
          size: "2em",
        }}
      >
        <div>
          <BiPaperPlane />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
