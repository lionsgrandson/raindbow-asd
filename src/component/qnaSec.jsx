import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "שאלות נפוצות",
  rows: [
    {
      title: "מה השירותים שאת מציעה?",
      content: `הרבה, לא יודע, היא לא שלחה לי עדיין טקסט`,
    },
    {
      title: "קצת עלי",
      content:
        "אני אמא לשני ילדים על הרצף האוטיסטי, ובזכותם – אני כאן. עם ניסיון אישי עמוק, תארים אקדמיים בחינוך מיוחד (B.A ו־M.A), פסיכותרפיה קוגניטיבית־התנהגותית, אבחון דידקטי והכשרות בתחום האוטיזם (ABA), אני משלבת בין לב מקצועי ללב אנושי. במקביל, אני חוקרת פוסט-טראומה אצל הורים לילדים עם אוטיזם ומלווה משפחות – לפני ואחרי האבחון – בדרך ברורה, מותאמת ורגישה.זה לא באמת שאלה, זה לא ממש מתאים כאן, אבל בסדר",
    },
    {
      title: "האם השירותים שלך מתאימים לי?",
      content: `שוב, אין לי טקסט `,
    },
    {
      title: " איפה מתקיימים המפגשים?",
      content: "הפעם יש לי טקסט, סתם לא באמת",
    },
    {
      title: "איך מתחילים?",
      content: "הידעתם שלפתח תוכנה עם טקסט בעברית זה לא כיף",
    },
  ],
};

const styles = {
  bgColor: "none",
  titleTextColor: "red",
  rowTitleColor: "blue",
  rowContentColor: "grey",
  row_Color: "red",
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true,
};

export default function QnaSec() {
  return (
    <div className="FirstBox">
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
