import { useState } from "react";
import "../App.css";
import RecBox from "./recBox";
import "./recSec.css";
function RecSec() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 2 < reviews.length ? prev + 2 : 0));
    console.log(startIndex);
  };
  const handleNextBack = () => {
    // setStartIndex(reviews.length);
    if (startIndex < reviews.length && startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else if (startIndex === 0) {
      setStartIndex(reviews.length - 1);
    }
    // Math.abs(
    //   setStartIndex((prev) =>
    //     prev < reviews.length && prev > -1 ? prev - 2 : reviews.length - 1
    //   )
    // );
    // setStartIndex(startIndex * -1);
    console.log(Math.abs(startIndex));
    // console.log(reviews.length);
  };
  const reviews = [
    {
      RevText:
        "”סיון מלווה אותי עוד שהתחלתי להתנדב בצבא ואפילו קצת לפני. היא עזרה לי להבין יותר את הסביבה ולענות בצורה מותאמת.\n\nלמדתי ממנה כיצד להתמודד עם ריבוי משימות ולעבוד על הלחץ שלי שלא ישפיע ויפרק לי את כל היום.\n\nהשיחה איתה עוזרת לי להבין את היחסים שלי מול המשפחה לי ומול החברים. אני יודע להתמודד עם הרבה יותר דברים היום בצורה מאוזנת. “",
      RevName: "בוגר בן 23",
    },
    {
      RevText:
        "”סיון הגיעה להעביר לנו הרצאה בנושא אוטיזם לעובדים שלנו שיש להם ילדים עם אוטיזם. היא נתנה כלים פרקטיים וענתה לכל השאלות שעלו בסבלנות רבה.\n\nההורים כל כך שמחו על קיום המפגש והיכולות שלנו כחברה לתת להם מענה ולהכיר בקשיים שהם מתמודדים איתם. סיון יצרה מקום בטוח במהלך ההרצאה שנתן אפשרות להיחשף ולהרגיש חלק מקהילה.\n\nמודה לה על ההרצאה המחברת והמגשרת עבורנו. “",
      RevName: " אנוש חברת ביטוח",
    },
    //from here it's demo
    {
      RevText:
        "”סיון הגיעה להעביר לנו הרצאה בנושא אוטיזם לעובדים שלנו שיש להם ילדים עם אוטיזם. היא נתנה כלים פרקטיים וענתה לכל השאלות שעלו בסבלנות רבה.\n\nההורים כל כך שמחו על קיום המפגש והיכולות שלנו כחברה לתת להם מענה ולהכיר בקשיים שהם מתמודדים איתם. סיון יצרה מקום בטוח במהלך ההרצאה שנתן אפשרות להיחשף ולהרגיש חלק מקהילה.\n\nמודה לה על ההרצאה המחברת והמגשרת עבורנו. “",
      RevName: "רכזת משאבי  ביטוח",
    },
    {
      RevText:
        "”סיון הגיעה להעביר לנו הרצאה בנושא אוטיזם לעובדים שלנו שיש להם ילדים עם אוטיזם. היא נתנה כלים פרקטיים וענתה לכל השאלות שעלו בסבלנות רבה.\n\nההורים כל כך שמחו על קיום המפגש והיכולות שלנו כחברה לתת להם מענה ולהכיר בקשיים שהם מתמודדים איתם. סיון יצרה מקום בטוח במהלך ההרצאה שנתן אפשרות להיחשף ולהרגיש חלק מקהילה.\n\nמודה לה על ההרצאה המחברת והמגשרת עבורנו. “",
      RevName: "רכזת משאבי אנוש חברת  ",
    },
    {
      RevText:
        "”סיון הגיעה להעביר לנו הרצאה בנושא אוטיזם לעובדים שלנו שיש להם ילדים עם אוטיזם. היא נתנה כלים פרקטיים וענתה לכל השאלות שעלו בסבלנות רבה.\n\nההורים כל כך שמחו על קיום המפגש והיכולות שלנו כחברה לתת להם מענה ולהכיר בקשיים שהם מתמודדים איתם. סיון יצרה מקום בטוח במהלך ההרצאה שנתן אפשרות להיחשף ולהרגיש חלק מקהילה.\n\nמודה לה על ההרצאה המחברת והמגשרת עבורנו. “",
      RevName: "רכזת משאבי אנוש חברת  ",
    },
    {
      RevText:
        "”סיון הגיעה להעביר לנו הרצאה בנושא אוטיזם לעובדים שלנו שיש להם ילדים עם אוטיזם. היא נתנה כלים פרקטיים וענתה לכל השאלות שעלו בסבלנות רבה.\n\nההורים כל כך שמחו על קיום המפגש והיכולות שלנו כחברה לתת להם מענה ולהכיר בקשיים שהם מתמודדים איתם. סיון יצרה מקום בטוח במהלך ההרצאה שנתן אפשרות להיחשף ולהרגיש חלק מקהילה.\n\nמודה לה על ההרצאה המחברת והמגשרת עבורנו. “",
      RevName: "רכזת  רת ביטוח",
    },
    {
      RevText:
        "”סיון הגיעה להעביר לנו הרצאה בנושא אוטיזם לעובדים שלנו שיש להם ילדים עם אוטיזם. היא נתנה כלים פרקטיים וענתה לכל השאלות שעלו בסבלנות רבה.\n\nההורים כל כך שמחו על קיום המפגש והיכולות שלנו כחברה לתת להם מענה ולהכיר בקשיים שהם מתמודדים אגשרת עבורנו. “",
      RevName: "רכזת  רת ביטוח",
    },
    // TODO add a small animation & style the button (maybe make it auto swtich)
  ];

  return (
    <div className="RecSecDiv">
      <button onClick={handleNextBack} className="nextBtn">
        <svg
          width="3rem"
          height="2.8rem"
          viewBox="-19.04 0 75.804 75.804"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(0)"
          stroke="#000000"
          stroke-width="3.7902"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g
              id="Group_65"
              data-name="Group 65"
              transform="translate(-831.568 -384.448)"
            >
              {" "}
              <path
                id="Path_57"
                data-name="Path 57"
                d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                fill="#0c2c67"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
      {reviews.slice(startIndex, startIndex + 2).map((review, index) => (
        <RecBox key={startIndex + index} {...review} />
      ))}

      <button onClick={handleNext} className="nextBtn">
        <svg
          width="3rem"
          height="2.8rem"
          viewBox="-19.04 0 75.804 75.804"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
          stroke="#000000"
          stroke-width="3.7902"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g
              id="Group_65"
              data-name="Group 65"
              transform="translate(-831.568 -384.448)"
            >
              {" "}
              <path
                id="Path_57"
                data-name="Path 57"
                d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                fill="#0c2c67"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}

export default RecSec;
