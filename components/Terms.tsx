import React from 'react';

const Terms: React.FC = () => {
  return (
    <section id="terms">
      <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-brand-lightblue pb-2 mt-8 mb-5 text-brand-blue">📝 תנאים כלליים</h2>
      <ul className="list-none pr-0 space-y-3 text-base">
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong>תוקף ההצעה:</strong> 10 ימים ממועד שליחתה.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong>תנאי תשלום:</strong> 50% מקדמה במעמד החתימה, ו-50% יתרה בסיום הפרויקט.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong>עלויות צד-שלישי:</strong> ההצעה אינה כוללת עלויות חודשיות למערכות צד-שלישי (כמו WhatsApp API, Make, Airtable, משולם), אשר יחולו על הלקוח ישירות.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong>תוכן ועיצוב:</strong> ההצעה אינה כוללת כתיבת תוכן שיווקי (קריאייטיב) או עיצוב גרפי.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong>אחריות הלקוח:</strong> על הלקוח לוודא כי כלל הנמענים שאליהם יישלחו המסרים הינם מאושרי דיוור בהתאם לחוק.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong>התממשקות סליקה:</strong> ההצעה מבוססת על שימוש במערכת הסליקה 'משולם'. על הלקוח לוודא כי חשבונו מאפשר התממשקות טכנית נדרשת (API). במידה ולא יתאפשר חיבור, נשקול פלטפורמה חלופית.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong>מע"מ:</strong> ההצעה אינה כוללת מע"מ.</div>
        </li>
      </ul>
    </section>
  );
};

export default Terms;