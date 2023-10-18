import React from "react";
import "./contact.css";
import fb from "../../assets/facebook.png";
import wm from "../../assets/walmart.png";
import ad from "../../assets/adobe.png";
import ms from "../../assets/microsoft.png";
import fbIcon from '../../assets/facebook-icon.png'
import xIcon from '../../assets/twitter.png'
import ytIcon from '../../assets/youtube.png'
import igIcon from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="client">
        <h2 className="clientHead">My Client</h2>
        <p className="clientDesc">
          I have had the opertunity to work with divrse group of companies. Some
          of the notable companies are included.
        </p>
        <div className="clientImgs">
          <img src={wm} alt="client" className="clientComp" />
          <img src={ad} alt="client" className="clientComp" />
          <img src={ms} alt="client" className="clientComp" />
          <img src={fb} alt="client" className="clientComp" />
        </div>
      </div>
      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <spam className="contactDesc">
          Please fill out the form given to discuss any work oppertunity
        </spam>
        <form action="" className="contactForm">
          <input
            type="text"
            name=""
            className="name"
            id=""
            placeholder="your name"
          />
          <input type="email" className="email" placeholder="Email" />
          <textarea
            className="msg"
            name=""
            id=""
            rows="5"
            placeholder="your message"
          ></textarea>
          <button className="submitBtm" type="submit" value="send">
            Submit
          </button>
          <div className="links">
            <img src={fbIcon} alt="facebook" className="link" />
            <img src={xIcon} alt="twitter" className="link" />
            <img src={ytIcon} alt="youTube" className="link" />
            <img src={igIcon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
