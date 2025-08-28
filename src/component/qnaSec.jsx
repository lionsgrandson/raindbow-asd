import React, { useEffect, useState } from 'react'
import './qna.css'
import logo from '../img/Logo_icon_noshadow.png'

const items = [
  {
    title: 'מהן התוכניות שאני מציעה?',
    content: `ליווי אישי והדרכה של משלבות בחינוך הרגיל (שילוב יחידני).<br />הדרכת הורים מותאמת להורים שבוחרים לשלב את ילדם.<br />הדרכת צוותים חינוכיים לקיום שילוב יחידני מיטבי ואיכותי.<br />הנחיית בוגרים ומתבגרים בתחומי שינוי ומעבר (צבא, שירות לאומי, תעסוקה, דיור ומיומנויות בין אישיות).<br />בניית הרצאות מותאמות עבור גופים פרטים וציבוריים בנושא אוטיזם – שילוב והכלה.<br />הדרכת מעסיקים כיצד ניתן לשלב בתחומי עבודה שונים אדם על הרצף האוטיסטי.`,
  },
  {
    title: 'קצת עלי',
    content: `סיון ורונסקי, אמא לדניאל ומיכאל, שניהם נמצאים על הרצף האוטיסטי.<br/>
 M.A בחינוך מיוחד מאוניברסיטת בר אילן. <br/>
 B.A בחינוך מיוחד מהאוניברסיטה הפתוחה.  <br/>
 ABA הכשרה בעקרונות יסוד בהתערבות חינוכית התנהגותית לילדים על רצף האוטיזם. <br/>
מומחית להוראה מתקנת ואסטרטגיות למידה.<br/>
פסיכותרפיסטית קוגנטיבית התנהגותית.<br/>
מאבחנת דידקטית מוסמכת.<br/>
חוקרת פוסט טראומה אצל הורים לילדים עם אוטיזם.<br/>
מתאמת שירות לבוגרים עם אוטיזם בתחומי שינוי ומעבר.<br/>
מנחה ומלווה משפחות לפני ואחרי האבחון, צעד צעד יחד.
`,
  },
  {
    title: 'איפה מתקיימים המפגשים?',
    content: `הקליניקה שלי ממוקמת בקריית אונו<br />*הרצאות יכולות להתקיים גם בבית הלקוח`,
  },
]

export default function QnaSec() {
  const [invis, setInvis] = useState(0)
  const [isOpen, setisOpen] = useState(true)

  function openQuestion(indexed) {
    if (invis === indexed) {
      setisOpen(!isOpen)
      setInvis(indexed)
    } else {
      setInvis(indexed)
    }
    console.log(isOpen)
  }
  return (
    <div className='FirstBox'>
      <ul>
        {items.map((item, index) => (
          <li key={index} className='listItemQnA'>
            <button onClick={() => openQuestion(index)} className='qnaBtn'>
              <img src={logo} alt='website logo' className='logoQnA' />
              <strong className='qnATitle'>{item.title}</strong>
            </button>
            {!isOpen && index === invis && (
              <p
                className='qnAP'
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
