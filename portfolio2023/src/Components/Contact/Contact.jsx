import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="ContactForm">
      <h2 className="Cont_Title">Contact me!</h2>
      <input type="text" placeholder="Name" className="col-12" />
      <input type="text" placeholder="Email" className="col-12" />
      <input
        type="text"
        placeholder="Message"
        className="col-12 Cont_Message"
      />
      <button className="col-12 Cont_Button">Send</button>
      <p className="Cont_By">Made by Dylan</p>
    </div>
  );
}

export default Contact;
