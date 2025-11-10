import React from 'react';

const PlatformsAndCosts: React.FC = () => {
  return (
    <section id="platforms-costs">
      <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-brand-lightblue pb-2 mt-8 mb-5 text-brand-blue">
        הפלטפורמות בהן נשתמש
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-brand-blue text-lg">Airtable</h3>
          <p className="text-gray-600 text-sm">לניהול ה-CRM, הלידים ובסיס הנתונים המרכזי.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-brand-blue text-lg">WhatsApp API</h3>
          <p className="text-gray-600 text-sm">לתקשורת ישירה ואוטומטית עם לידים ולקוחות.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-brand-blue text-lg">Make (Integromat)</h3>
          <p className="text-gray-600 text-sm">"הדבק" המחבר בין כל המערכות ובונה את תהליכי האוטומציה.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold text-brand-blue text-lg">משולם</h3>
          <p className="text-gray-600 text-sm">לסליקת אשראי וניהול תשלומים.</p>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-brand-lightblue pb-2 mt-8 mb-5 text-brand-blue">
        הערכת עלויות חודשיות (צד-שלישי)
      </h2>
      <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-md my-4">
        <p className="text-yellow-900"><strong className="font-semibold">הבהרה חשובה:</strong> העלויות הבאות הינן עלויות חיצוניות המשולמות ישירות לספקי הפלטפורמות ואינן כלולות בעלות ההקמה.</p>
      </div>
      <ul className="list-none pr-0 space-y-3 text-base">
         <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong className="font-semibold text-gray-700">WhatsApp API (Meta):</strong> העלות מבוססת על מודל התמחור של Meta, ומשתנה בהתאם לכמות וסוג השיחות.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong className="font-semibold text-gray-700">Make (Integromat):</strong> העלות תלויה בכמות הפעולות (Operations) החודשית. החבילה הבסיסית (Core) מתחילה ב-$9 לחודש.</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong className="font-semibold text-gray-700">Airtable:</strong> ניתן להתחיל עם החבילה החינמית. חבילות בתשלום (Plus/Pro) נדרשות עבור נפח נתונים גדול יותר או יכולות מתקדמות (החל מ-$10 למשתמש/חודש).</div>
        </li>
        <li className="flex items-start">
            <span className="text-brand-blue font-bold text-xl ml-3">✓</span>
            <div><strong className="font-semibold text-gray-700">משולם:</strong> עלויות סליקה בהתאם למסלול הלקוח מול חברת הסליקה (עמלת סליקה + עלות חודשית קבועה).</div>
        </li>
      </ul>
      <p className="mt-5 text-gray-700 bg-gray-100 p-3 rounded-md border border-gray-200">
        אנו נסייע בהתאמת החבילות הנכונות ביותר לצורכי העסק כדי למזער עלויות.
      </p>
    </section>
  );
};

export default PlatformsAndCosts;