import TextField from "@mui/material/TextField";

import { FaPhoneAlt } from "react-icons/fa";

function ContactSec() {
  return (
    <section>
      <h2>יצירת קשר</h2>
      <div>
        <form>
          <TextField type="text" label="שם" />
          <TextField type="phone" label="טלפון" />
          <TextField type="text" label="הודעה" />
        </form>
        <div>
          <a href="tel:+972546495902">054-649-5902</a>
          <FaPhoneAlt />
        </div>
      </div>
    </section>
  );
}
export default ContactSec;
