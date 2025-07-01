import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logoLongTxt from "../img/Logo_with_NO_shadow_text.png";
export default function Footer() {
  return (
    <div>
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
