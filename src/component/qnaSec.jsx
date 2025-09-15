import React, { useState } from "react";
import "./qna.css";
import logo from "../img/Logo_icon_noshadow_Custom.png";

const items = [
  {
    title: "מהן התוכניות שאני מציעה? ",
    content: "ליווי אישי והדרכה של משלבות בחינוך הרגיל (שילוב יחידני).",
    content2: "הדרכת הורים מותאמת להורים שבוחרים לשלב את ילדם.",
    content3: "הדרכת צוותים חינוכיים לקיום שילוב יחידני מיטבי ואיכותי.",
    content4:
      "הנחיית בוגרים ומתבגרים בתחומי שינוי ומעבר (צבא, שירות לאומי, תעסוקה, דיור ומיומנויות בין אישיות).",
    content5:
      "בניית הרצאות מותאמות עבור גופים פרטים וציבוריים בנושא אוטיזם – שילוב והכלה.",
    content6:
      "הדרכת מעסיקים כיצד ניתן לשלב בתחומי עבודה שונים אדם על הרצף האוטיסטי.",
  },
  {
    title: "קצת עלי",
    content: "סיון ורונסקי, אמא לדניאל ומיכאל, שניהם נמצאים על הרצף האוטיסטי.",
    content2: "B.A בחינוך מיוחד מהאוניברסיטה הפתוחה.  ",
    content3: " M.A בחינוך מיוחד מאוניברסיטת בר אילן.",
    content4:
      "ABA הכשרה בעקרונות יסוד בהתערבות חינוכית התנהגותית לילדים על רצף האוטיזם.",
    content5: "מומחית להוראה מתקנת ואסטרטגיות למידה.",
    content6: " פסיכותרפיסטית קוגנטיבית התנהגותית CBT",
    content7: "מאבחנת דידקטית מוסמכת.",
    content8: "חוקרת פוסט טראומה אצל הורים לילדים עם אוטיזם.",
    content9: "מתאמת שירות לבוגרים עם אוטיזם בתחומי שינוי ומעבר.",
    content10: "מנחה ומלווה משפחות לפני ואחרי האבחון, צעד צעד יחד.",
  },
  {
    title: "איפה מתקיימים המפגשים?",
    content: "הקליניקה שלי ממוקמת בקריית אונו",
    content2: "*הרצאות יכולות להתקיים גם בבית הלקוח",
  },
];

export default function QnaSec() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="FirstBox">
      <ul>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={index} className="listItemQnA">
              <button
                onClick={() => toggleQuestion(index)}
                className="qnaBtn"
                aria-expanded={isOpen}
              >
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  className="arrowCloosedSvg"
                  viewBox="-19.04 0 75.804 75.804"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  transform={isOpen ? "rotate(90)" : "rotate(270)"}
                  stroke="#000000"
                  strokeWidth="3.7902"
                >
                  <g id="SVGRepo_iconCarrier">
                    <g
                      id="Group_65"
                      data-name="Group 65"
                      transform="translate(-831.568 -384.448)"
                    >
                      <path
                        id="Path_57"
                        data-name="Path 57"
                        d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                        fill="#0c2c67"
                      ></path>
                    </g>
                  </g>
                </svg>
                <strong className="qnATitle">{item.title}</strong>
              </button>

              {isOpen && (
                <p className="qnAP">
                  {Object.keys(item).map(
                    (key, i) =>
                      key.startsWith("content") && (
                        <span key={i}>
                          <img
                            src={logo}
                            alt="website logo"
                            className="logoQnA"
                          />
                          {item[key]}
                          <br />
                          <br />
                        </span>
                      )
                  )}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
