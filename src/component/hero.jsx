import '../App.css'
import Icon from '../img/Logo_icon_noshadow.png'

import heroSesh from '../img/therapySesh.png'
import './HheroSec.css'

function Hero() {
  return (
    <div className='HeroSec'>
      <header>
        <img
          src={Icon}
          alt='a puzzle peice with a rainbow colors'
          className='iconHead'
        />
      </header>
      <section className='FirstBox'>
        <h1> הנחייה אישית</h1>
        <h2 className='topHeroH2'>
          להורים שפונים לשילוב יחידני ולמתבגרים ובוגרים על הרצף האוטיסטי
        </h2>
        <div className='HeroSpli'>
          {/* this we put on the right */}
          <div className='HeroDiv'>
            <div className='TextHeroDiv'>
              <ul>
                <li>איך אדע אם מתאים לילד/ה שילוב יחידני בכיתה רגילה?</li>
                <li>
                  כיצד ניתן להכשיר משלבת טובה ומדויקת שתתן מענה בזמן הנכון?
                </li>
                <li>
                  מה צריך לעשות כדי לרתום את הצוות החינוכי לסייע ולקדם את השילוב
                  היחידני?
                </li>
              </ul>
            </div>
          </div>
          <img
            src={heroSesh}
            alt='animation of a thearpy sesion'
            className='headshot'
          />
          {/* this will be the middle */}
          <div className='HeroDiv'>
            <div className='TextHeroDiv'>
              <ul>
                <li>
                  האם מתאים לבן/בת שלי שירות צבאי, לאומי אולי בכלל מסגרת אחרת?
                </li>
                <li>
                  איזו מסגרת לימודים תאפשר מענה מותאם וליווי אקדמי לאדם על הרצף
                  האוטיסטי?
                </li>
                <li>מהו מקום העבודה המתאים לצרכים המיוחדים של הבן/בת שלי?</li>
              </ul>
            </div>
          </div>
          {/* end of the split */}
        </div>
        <p className='bottomDivText'>
          אני כאן בשבילכם – ללוות, להדריך ולבנות יחד מסלול מותאם אישית לילד
          שלכם, צעד אחר צעד. <br />
          <br />
          ליווי אישי למתבגרים ובוגרים עם אוטיזם, סדנאות להורים, וייעוץ מקצועי
          מבוסס ניסיון אישי, קליני ואקדמי.
        </p>
        <h2 className='heroCTA'>מלאו פרטים בטופס ואחזור אליכם לשיחת היכרות</h2>
      </section>
    </div>
  )
}

export default Hero
