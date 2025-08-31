import React, { useEffect, useState } from "react";
import "./qna.css";
import logo from "../img/Logo_icon_noshadow_Custom.png";

// const items = [
//   {
//     title: "מהן התוכניות שאני מציעה? ",
//     content: `<img src=${logo} alt='website logo' className='logoQnA' />ליווי אישי והדרכה של משלבות בחינוך הרגיל (שילוב יחידני).<br /><img src=${logo} alt='website logo' className='logoQnA' />הדרכת הורים מותאמת להורים שבוחרים לשלב את ילדם.<br /><img src=${logo} alt='website logo' className='logoQnA' />הדרכת צוותים חינוכיים לקיום שילוב יחידני מיטבי ואיכותי.<br /><img src=${logo} alt='website logo' className='logoQnA' />הנחיית בוגרים ומתבגרים בתחומי שינוי ומעבר (צבא, שירות לאומי, תעסוקה, דיור ומיומנויות בין אישיות).<br /><img src=${logo} alt='website logo' className='logoQnA' />בניית הרצאות מותאמות עבור גופים פרטים וציבוריים בנושא אוטיזם – שילוב והכלה.<br /><img src=${logo} alt='website logo' className='logoQnA' />הדרכת מעסיקים כיצד ניתן לשלב בתחומי עבודה שונים אדם על הרצף האוטיסטי.`,
//   },
//   {
//     title: "קצת עלי",
//     content: `<img src=${logo} alt='website logo' className='logoQnA' />סיון ורונסקי, אמא לדניאל ומיכאל, שניהם נמצאים על הרצף האוטיסטי.<br/><img src=${logo} alt='website logo' className='logoQnA' />
//     B.A בחינוך מיוחד מהאוניברסיטה הפתוחה.  <br/><img src=${logo} alt='website logo' className='logoQnA' />
//  M.A בחינוך מיוחד מאוניברסיטת בר אילן. <br/><img src=${logo} alt='website logo' className='logoQnA' />
//  ABA הכשרה בעקרונות יסוד בהתערבות חינוכית התנהגותית לילדים על רצף האוטיזם. <br/><img src=${logo} alt='website logo' className='logoQnA' />
// מומחית להוראה מתקנת ואסטרטגיות למידה.<br/><img src=${logo} alt='website logo' className='logoQnA' />
//  CBT פסיכותרפיסטית קוגנטיבית התנהגותית.<br/><img src=${logo} alt='website logo' className='logoQnA' />
// מאבחנת דידקטית מוסמכת.<br/><img src=${logo} alt='website logo' className='logoQnA' />
// חוקרת פוסט טראומה אצל הורים לילדים עם אוטיזם.<br/><img src=${logo} alt='website logo' className='logoQnA' />
// מתאמת שירות לבוגרים עם אוטיזם בתחומי שינוי ומעבר.<br/><img src=${logo} alt='website logo' className='logoQnA' />
// מנחה ומלווה משפחות לפני ואחרי האבחון, צעד צעד יחד.
// `,
//   },
//   {
//     title: "איפה מתקיימים המפגשים?",
//     content: `הקליניקה שלי ממוקמת בקריית אונו<br />*הרצאות יכולות להתקיים גם בבית הלקוח`,
//   },
// ];
const items = [
  {
    title: "מהן התוכניות שאני מציעה? ",
    content: "`ליווי אישי והדרכה של משלבות בחינוך הרגיל (שילוב יחידני).",
    content2: "הדרכת הורים מותאמת להורים שבוחרים לשלב את ילדם.",
    content3: "הדרכת צוותים חינוכיים לקיום שילוב יחידני מיטבי ואיכותי.",
    content4:
      "הנחיית בוגרים ומתבגרים בתחומי שינוי ומעבר (צבא, שירות לאומי, תעסוקה, דיור ומיומנויות בין אישיות).",
    content5:
      "בניית הרצאות מותאמות עבור גופים פרטים וציבוריים בנושא אוטיזם – שילוב והכלה.",
    content6:
      "הדרכת מעסיקים כיצד ניתן לשלב בתחומי עבודה שונים אדם על הרצף האוטיסטי.`",
  },
  {
    title: "קצת עלי",
    content: "סיון ורונסקי, אמא לדניאל ומיכאל, שניהם נמצאים על הרצף האוטיסטי.",
    content2: "B.A בחינוך מיוחד מהאוניברסיטה הפתוחה.  ",
    content3: " M.A בחינוך מיוחד מאוניברסיטת בר אילן.",
    content4:
      "ABA הכשרה בעקרונות יסוד בהתערבות חינוכית התנהגותית לילדים על רצף האוטיזם.",
    content5: "מומחית להוראה מתקנת ואסטרטגיות למידה.",
    content6: "CBT פסיכותרפיסטית קוגנטיבית התנהגותית.",
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
  const [invis, setInvis] = useState(0);
  const [isOpen, setisOpen] = useState(true);

  function openQuestion(indexed) {
    if (invis === indexed) {
      setisOpen(!isOpen);
      setInvis(indexed);
    } else {
      setInvis(indexed);
    }
    console.log(isOpen);
  }
  return (
    <div className="FirstBox">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="listItemQnA">
            <button onClick={() => openQuestion(index)} className="qnaBtn">
              <strong className="qnATitle">{item.title}</strong>
            </button>
            {!isOpen && index === invis && (
              <p
                className="qnAP"
                key={index}
                // dangerouslySetInnerHTML={{ __html:  }}
              >
                <img src={logo} alt="website logo" className="logoQnA" />
                {/* {item.content{index}} */}
                {/* {(itemIndex = `content${index}`)} */}

                {item.content}

                <br />
                <br />

                <img src={logo} alt="website logo" className="logoQnA" />
                {item.content2}
                {item.content3 ? (
                  <>
                    <br />
                    <br />
                    <img src={logo} alt="website logo" className="logoQnA" />
                    {item.content3}
                    <br />
                    <br />
                    <img src={logo} alt="website logo" className="logoQnA" />
                    {item.content4}
                    <br />
                    <br />
                    <img src={logo} alt="website logo" className="logoQnA" />
                    {item.content5}
                    <br />
                    <br />
                    <img src={logo} alt="website logo" className="logoQnA" />
                    {item.content6}
                    {item.content7 ? (
                      <>
                        <br />
                        <br />
                        <img
                          src={logo}
                          alt="website logo"
                          className="logoQnA"
                        />
                        {item.content7}
                        <br />
                        <br />
                        <img
                          src={logo}
                          alt="website logo"
                          className="logoQnA"
                        />
                        {item.content8}
                        <br />
                        <br />
                        <img
                          src={logo}
                          alt="website logo"
                          className="logoQnA"
                        />
                        {item.content9}
                        <br />
                        <br />
                        <img
                          src={logo}
                          alt="website logo"
                          className="logoQnA"
                        />
                        {item.content10}
                        <br />
                        <br />
                      </>
                    ) : null}
                  </>
                ) : null}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
