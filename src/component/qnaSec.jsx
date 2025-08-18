import React, { useEffect, useState } from "react";
import "./qna.css";
import logo from "../img/Logo_icon_noshadow.png";

const items = [
  {
    title: "מהן התוכניות שאני מציעה?",
    content: `ליווי אישי והדרכה של משלבות בחינוך הרגיל (שילוב יחידני).
הדרכת הורים מותאמת להורים שבוחרים לשלב את ילדם.
הדרכת צוותים חינוכיים לקיום שילוב יחידני מיטבי ואיכותי.
הנחיית בוגרים ומתבגרים בתחומי שינוי ומעבר (צבא, שירות לאומי, תעסוקה, דיור ומיומנויות בין אישיות).

בניית הרצאות מותאמות עבור גופים פרטים וציבוריים בנושא אוטיזם – שילוב והכלה.

הדרכת מעסיקים כיצד ניתן לשלב בתחומי עבודה שונים אדם על הרצף האוטיסטי.`,
  },
  {
    title: "קצת עלי",
    content: `סיון ורונסקי, אמא לדניאל ומיכאל, שניהם נמצאים על הרצף האוטיסטי.
בחינוך מיוחד מאוניברסיטת בר אילן.
בחינוך מיוחד מהאוניברסיטה הפתוחה.
הכשרה בעקרונות יסוד בהתערבות חינוכית התנהגותית לילדים על רצף האוטיזם.
מומחית להוראה מתקנת ואסטרטגיות למידה.
פסיכותרפיסטית קוגנטיבית התנהגותית.
מאבחנת דידקטית מוסמכת.
חוקרת פוסט טראומה אצל הורים לילדים עם אוטיזם.
מתאמת שירות לבוגרים עם אוטיזם בתחומי שינוי ומעבר.
מנחה ומלווה משפחות לפני ואחרי האבחון, צעד צעד יחד.`,
  },
  {
    title: "איפה מתקיימים המפגשים?",
    content: `הקליניקה שלי ממוקמת בקריית אונו
*הרצאות יכולות להתקיים גם בבית הלקוח`,
  },
];

export default function QnaSec() {
  const [invis, setInvis] = useState(0);

  function openQuestion(indexed) {
    if (invis === 4) {
      setInvis(indexed);
    } else {
      setInvis(4);
    }
    console.log(indexed);
  }
  return (
    <div className="FirstBox">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="listItemQnA">
            <button onClick={() => openQuestion(index)}>
              <img src={logo} alt="website logo" className="logoQnA" />
            </button>
            <strong className="qnATitle">{item.title}</strong>
            <p className={`qnAP`}>{index === invis ? item.content : null}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
