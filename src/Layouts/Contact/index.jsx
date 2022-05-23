import React from "react";
import "./styles.css";
import Footer from "../Footer";

function Contact() {
  return (
    <div className="bg-primary contact-container">
      <div className="contact-wrapper">
        <div className="headding">
          <h3 className="text-light">Contact</h3>
        </div>
      </div>
      <div className="contact-form">
        <form className="form" action="">
          <label htmlFor="name">Name :</label>
          <input type="text" />
          <label htmlFor="email">Email address :</label>
          <input type="email" name="email" id="" />
          <label htmlFor="message">Message :</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
