import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="intro">
      <h2 className="text-xl font-semibold text-gray-600">הצעת מחיר עבור: ירון ויסברג</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">הקמת מערכת CRM ואוטומציה לניהול לידים</h1>
      
      <h3 className="text-xl font-bold text-brand-blue mt-6 mb-2">🎯 מטרת העל</h3>
      <p className="text-gray-700">להקים מערכת CRM חכמה ואוטומטית שתנהל את כל מחזור חיי הלקוח – החל מקליטת הליד ועד סגירה, תשלום, תקשורת שוטפת ושימור לקוחות – במטרה להגדיל את אחוזי ההמרה, לחסוך זמן וליצור סיסטם קבוע וניתן למדידה.</p>

      <h3 className="text-2xl font-bold text-brand-blue mt-8 border-b-2 border-brand-lightblue pb-2 mb-4">⚙️ רכיבי המערכת</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-bold text-brand-blue">1. בסיס נתונים (CRM – Airtable)</h4>
          <p className="mb-2 text-gray-600">בניית טבלת CRM מרכזית לניהול לידים ולקוחות.</p>
          <ul className="list-disc pr-5 space-y-1 text-gray-700">
            <li><strong>שדות עיקריים:</strong> שם מלא, טלפון, אימייל, מקור הגעה, תאריך קליטה, סטטוס, מוצר, הערות, סכום עסקה, תאריך סגירה, דירוג איכות.</li>
            <li><strong>ניהול משתמשים והרשאות</strong> (ירון, איש מכירות).</li>
            <li><strong>דוחות וסטטיסטיקות חודשיות</strong> (לידים, סגירות, יחס המרה, מקור הגעה).</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-brand-blue">2. אוטומציות (Make)</h4>
          <ul className="list-disc pr-5 space-y-1 text-gray-700">
            <li>חיבור כל מקורות הלידים (אתר, פייסבוק, וואטסאפ, טופסי Google).</li>
            <li>יצירת טריגרים אוטומטיים לכל ליד חדש.</li>
            <li>שליחת הודעת וואטסאפ אוטומטית עם שאלות סינון.</li>
            <li>התראות בזמן אמת לירון ולאיש המכירות על ליד חדש.</li>
            <li>תזכורות (Follow-up) אוטומטיות אחרי 2–3 ימים ללא תגובה.</li>
            <li>העברת לידים שלא סגרו לרשימת רימרקטינג.</li>
            <li>עדכון סטטוס אוטומטי לאחר תשלום.</li>
            <li>שליחה אוטומטית של מייל/וואטסאפ ללקוחות שסגרו עם חוזה, קישורים וקבוצת וואטסאפ.</li>
            <li>יצירת דו"ח חודשי אוטומטי.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-brand-blue">3. אינטגרציות</h4>
          <ul className="list-disc pr-5 space-y-1 text-gray-700">
            <li>Airtable – בסיס הנתונים הראשי.</li>
            <li>Make (Integromat) – מנוע האוטומציות.</li>
            <li>משולם – סליקה ושליחת לינקי תשלום.</li>
            <li>WhatsApp API (GreenAPI / Meta) – תקשורת עם לידים, הודעות אוטומטיות ובוט.</li>
            <li>WordPress + Elementor – טפסי קליטת לידים מהאתר.</li>
            <li>Gmail / Google Sheets – דיווחים, תזכורות, גיבויים.</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-brand-blue">4. מערכת וואטסאפ אוטומטית</h4>
          <ul className="list-disc pr-5 space-y-1 text-gray-700">
            <li>בוט קבלת לידים ושאלות סינון ראשוניות.</li>
            <li>הודעות אוטומטיות: תודה, פולואפים, סגירה ותשלום.</li>
            <li>דיוורים ללקוחות ומתעניינים לפני פתיחת קורסים.</li>
            <li>חיבור ישיר ל־CRM למעקב ודירוג לידים לפי אינטראקציה.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-brand-blue">5. חוקיות וציות (Compliance)</h4>
          <ul className="list-disc pr-5 space-y-1 text-gray-700">
            <li>הוספת תיבת “אני מאשר קבלת מסרים שיווקיים” בכל טופס.</li>
            <li>עדכון מדיניות פרטיות באתר בהתאם לחוק הספאם ותקנות פרטיות (אוגוסט 2024).</li>
            <li>תיעוד מדיניות ביטולים ואחסון מידע בהתאם לתקינה.</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-brand-blue mt-8 border-b-2 border-brand-lightblue pb-2 mb-4">👥 בעלי תפקידים במערכת</h3>
      <ul className="list-disc pr-5 space-y-1 text-gray-700">
          <li><strong>ירון ויסברג</strong> – בעל העסק, אחראי פדגוגיה ושיווק.</li>
          <li><strong>איש מכירות</strong> – אחראי התקשרות וסגירות.</li>
          <li><strong>מפתח CRM (אלירן)</strong> – אחראי אפיון, בנייה ואוטומציות.</li>
      </ul>
    </section>
  );
};

export default Intro;