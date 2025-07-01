import TextField from "@mui/material/TextField";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function ContactSec() {
  return (
    <section>
      <h2>יצירת קשר</h2>
      <div>
        <form method="POST" autocomplete="on">
          <TextField type="text" label="שם" autocomplete="on" />
          <TextField type="phone" label="טלפון" />
          <TextField type="email" label="מייל" />
          <TextField type="text" label="הודעה" />
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
        <div>
          <a href="tel:+972546495902">054-649-5902</a>
          <FaPhoneAlt />
        </div>
        <div>
          <a href="mail:LEVANONSKI@GMAIL.COM">levanonski@gmail.com</a>
          <MdEmail />
        </div>
      </div>
    </section>
  );
}
export default ContactSec;
