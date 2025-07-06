import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logoLongTxt from "../img/Logo_with_NO_shadow_text.png";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footerSec FirstBox">
      <img
        src={logoLongTxt}
        alt="on the left the slogan on the right a puzzle piece with rainbow colors"
      />
      <div>
        <FaPhoneAlt />
        <a href="tel:+972546495902">054-649-5902</a>
      </div>
      <div>
        <MdEmail />
        <a href="mailto:LEVANONSKI@GMAIL.COM">levanonski@gmail.com</a>
      </div>
    </div>
  );
}
