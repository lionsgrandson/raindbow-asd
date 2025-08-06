import TextField from "@mui/material/TextField";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "../App.css";
import "./contactSec.css";
import { FaLocationDot } from "react-icons/fa6";

function ContactSec() {
  return (
    <section id="contact" className="FirstBox">
      <h2 className="h1Con">יצירת קשר</h2>
      <div className="contactContent">
        <form method="POST" className="ConForm">
          <input
            type="text"
            placeholder="שם"
            id="name"
            autoComplete="name"
            className="textField"
          />
          <input
            type="phone"
            autocomplete="phone"
            id="phone"
            placeholder="טלפון"
            className="textField"
          />
          <input
            type="email"
            autocomplete="email"
            id="email"
            placeholder="מייל"
            className="textField"
          />
          <textarea type="text" placeholder="הודעה" className="textArea" />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("btn clicked");
            }}
          >
            Send
          </button>
        </form>
        <section className="conDit">
          <div>
            <p c>קריית אונו והסביבה</p>
            <FaLocationDot />
          </div>
          <div>
            <a href="tel:+972546495902">054-649-5902</a>
            <FaPhoneAlt />
          </div>
          <div>
            <a href="mail:LEVANONSKI@GMAIL.COM">levanonski@gmail.com</a>
            <MdEmail />
          </div>
        </section>
      </div>
    </section>
  );
}
export default ContactSec;
