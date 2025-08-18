import "../App.css";
import Icon from "../img/Logo_icon_noshadow.png";
import sivanHeadShot from "../img/sivanHeadShot.png.png";
import "./HheroSec.css";

function Hero() {
  return (
    <div className="HeroSec">
      <header>
        <img
          src={Icon}
          alt="a puzzle peice with a rainbow colors"
          className="iconHead"
        />
      </header>
      <section className="FirstBox">
        <h1> הנחייה אישית</h1>
        <h2>להורים שפונים לשילוב יחידני ולמתבגרים ובוגרים על הרצף האוטיסטי</h2>
        <div className="HeroDiv">
          <div className="TextHeroDiv">
            <h2>האם פעם שאלתם את עצמכם...</h2>
            <ul>
              <li>איך ללמד את הילד שלי לנסוע לבד באוטובוס?</li>
              <li>האם מתאים לו שירות צבאי, לאומי או בכלל מסגרת אחרת?</li>
              <li>איך בוחרים מסגרת לימודים או עבודה לבוגרים עם אוטיזם?</li>
              <li>איך שומרים על שגרת יום יציבה בגיל ההתבגרות?</li>
            </ul>

            <p>
              אני כאן בשבילכם – ללוות, להדריך ולבנות יחד מסלול מותאם אישית לילד
              שלכם, צעד אחר צעד. <br />
              <br />
              ליווי אישי למתבגרים ובוגרים עם אוטיזם, סדנאות להורים, וייעוץ
              מקצועי מבוסס ניסיון אישי, קליני ואקדמי.
            </p>
            <h2>מלאו פרטים בטופס ואחזור אליכם לשיחת היכרות</h2>
          </div>
          <img
            src={sivanHeadShot}
            alt="headshot of Sivan the owner of the business"
            className="headshot"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
