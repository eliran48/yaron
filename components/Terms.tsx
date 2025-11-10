import React from 'react';

const Terms: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">תנאים כלליים</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>ההצעה בתוקף ל-14 ימים.</li>
        <li>לוחות זמנים: עד 14 ימי עסקים לסיום הפרויקט, בכפוף לשיתוף פעולה מצד הלקוח.</li>
        <li>המחירים אינם כוללים מע"מ.</li>
        <li>תנאי תשלום: 50% מקדמה עם אישור ההצעה, 50% בסיום הפרויקט.</li>
        <li>כל שינוי או תוספת מעבר למוגדר בהצעה זו יתומחר בנפרד.</li>
        <li>הלקוח אחראי לספק את כל החומרים הנדרשים (גישות, תוכן להודעות וכו').</li>
      </ul>
    </section>
  );
};

export default Terms;
