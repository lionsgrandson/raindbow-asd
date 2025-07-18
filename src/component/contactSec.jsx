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
        <form method="POST" autocomplete="on" className="ConForm">
          <TextField
            type="text"
            label="שם"
            autocomplete="on"
            className="textField"
          />
          <TextField type="phone" label="טלפון" className="textField" />
          <TextField type="email" label="מייל" className="textField" />
          <TextField type="text" label="הודעה" className="textField" />
          <TextField
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("btn clicked");
            }}
          >
            Send
          </TextField>
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
