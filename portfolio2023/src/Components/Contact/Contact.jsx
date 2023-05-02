import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="ContactForm">
      <h2>Contact me!</h2>
      <input type="text" placeholder="Name" className="col-12" />
      <input type="text" placeholder="Email" className="col-12" />
      <input type="text" placeholder="Message" className="col-12" />
    </div>
  );
}

export default Contact;
