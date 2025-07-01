import TextField from "@mui/material/TextField";
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
      </div>
    </section>
  );
}
export default ContactSec;
