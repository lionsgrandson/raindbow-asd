import { useState, useEffect } from 'react'
import '../App.css'
import RecBox from './recBox'
import './recSec.css'

function RecSec() {
  const [startIndex, setStartIndex] = useState(0)

  const reviews = [
    {
      RevText:
        '”סיון מלווה אותי עוד שהתחלתי להתנדב בצבא ואפילו קצת לפני. היא עזרה לי להבין יותר את הסביבה ולענות בצורה מותאמת.\n\nלמדתי ממנה כיצד להתמודד עם ריבוי משימות ולעבוד על הלחץ שלי שלא ישפיע ויפרק לי את כל היום.\n\nהשיחה איתה עוזרת לי להבין את היחסים שלי מול המשפחה לי ומול החברים. אני יודע להתמודד עם הרבה יותר דברים היום בצורה מאוזנת. “',
      RevName: 'בוגר בן 23',
    },
    {
      RevText:
        '”סיון הגיעה להעביר לנו הרצאה בנושא אוטיזם לעובדים שלנו שיש להם ילדים עם אוטיזם. היא נתנה כלים פרקטיים וענתה לכל השאלות שעלו בסבלנות רבה.\n\nההורים כל כך שמחו על קיום המפגש והיכולות שלנו כחברה לתת להם מענה ולהכיר בקשיים שהם מתמודדים איתם. סיון יצרה מקום בטוח במהלך ההרצאה שנתן אפשרות להיחשף ולהרגיש חלק מקהילה.\n\nמודה לה על ההרצאה המחברת והמגשרת עבורנו. “',
      RevName: 'אנוש חברת ביטוח',
    },
    // דמו נוספים...
    {
      RevText: '”סיון הגיעה להעביר לנו הרצאה...“',
      RevName: 'רכזת משאבי ביטוח',
    },
    {
      RevText: '”סיון יצרה מקום בטוח...“',
      RevName: 'רכזת משאבי אנוש',
    },
    {
      RevText: '”סיון הגיעה להעביר לנו הרצאה.ביר לנו הרצאה...“',
      RevName: 'רכזת משאבי ביטוח',
    },
    {
      RevText: '”סיון יצרה מקום בטוח...“',
      RevName: 'רכזת משאבי אנוש',
    },
  ]

  // ⏩ Go forward
  const handleNext = () => {
    setStartIndex((prev) => (prev + 2 < reviews.length ? prev + 2 : 0))
  }

  // ⏪ Go back
  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - 2 >= 0 ? prev - 2 : Math.max(0, reviews.length - 2)
    )
  }

  // 🎬 Auto-slide forward every 3s
  useEffect(() => {
    const interval = setInterval(handleNext, 3000)
    return () => clearInterval(interval) // cleanup
  }, [reviews.length])

  return (
    <div className='RecSecDiv'>
      <button onClick={handlePrev} className='nextBtn'>
        ▶
      </button>

      {reviews.slice(startIndex, startIndex + 2).map((review, index) => (
        <RecBox key={startIndex + index} {...review} />
      ))}

      <button onClick={handleNext} className='nextBtn'>
        ◀
      </button>
    </div>
  )
}

export default RecSec
