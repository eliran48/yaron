import React from 'react';

const PlatformsAndCosts: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">פלטפורמות ועלויות חיצוניות</h2>
      <p className="text-gray-700 mb-4">
        ההצעה כוללת את עלות ההקמה והאינטגרציה של המערכות. חשוב לציין כי ישנן עלויות חודשיות שוטפות עבור הפלטפורמות עצמן, המשולמות ישירות לספקים. העלויות משתנות בהתאם לחבילה ולשימוש.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-right p-3 font-semibold text-gray-700">פלטפורמה</th>
              <th className="text-right p-3 font-semibold text-gray-700">תפקיד</th>
              <th className="text-right p-3 font-semibold text-gray-700">עלות חודשית (מוערכת)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">Airtable</td>
              <td className="p-3">מערכת CRM</td>
              <td className="p-3">החל מ-$20 למשתמש</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Make (Integromat)</td>
              <td className="p-3">מערכת אוטומציה</td>
              <td className="p-3">החל מ-$9</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">WhatsApp API</td>
              <td className="p-3">שליחת הודעות וואטסאפ</td>
              <td className="p-3">החל מ-$5 + עלות לפי הודעה</td>
            </tr>
            <tr>
              <td className="p-3">משולם</td>
              <td className="p-3">סליקת אשראי</td>
              <td className="p-3">עמלה לפי עסקה</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PlatformsAndCosts;
