import React, { useState, useEffect } from 'react';

const ApprovalForm: React.FC = () => {
  const [approvalDate, setApprovalDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  useEffect(() => {
    const getFormattedDate = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };
    setApprovalDate(getFormattedDate());
  }, []);

  return (
    <section id="approval" className="bg-brand-blue text-white p-6 md:p-10 rounded-lg mt-8">
      <h2 className="text-white border-b-brand-lightblue mt-0 text-2xl md:text-3xl font-bold border-b-2 pb-2 mb-5">✅ אישור ההצעה והתחלת העבודה</h2>
      <p>מוכן להתחיל? אנא מלא את הפרטים מטה לאישור ההצעה ותחילת הפרויקט.</p>
      
      <form 
        action="https://formspree.io/f/xanawgvd" 
        method="POST" 
        className="mt-6 space-y-5"
      >
        <input type="hidden" name="_subject" value="אישור הצעת מחיר - ירון ויסברג - הקמת CRM ואוטומציה" />

        <div>
          <label htmlFor="clientName" className="block font-semibold mb-2">שם מלא (הקלדת שמך מהווה חתימה)</label>
          <input 
            type="text" 
            id="clientName" 
            name="signature" 
            placeholder="ירון ויסברג" 
            required 
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-brand-lightblue focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="clientEmail" className="block font-semibold mb-2">דוא"ל (לקבלת עותק מהאישור)</label>
          <input 
            type="email" 
            id="clientEmail" 
            name="email" 
            placeholder="email@example.com" 
            required 
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-brand-lightblue focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="approvalDate" className="block font-semibold mb-2">תאריך אישור</label>
          <input 
            type="text" 
            id="approvalDate" 
            name="date" 
            value={approvalDate} 
            readOnly 
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed text-gray-600"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-brand-lightblue text-brand-blue text-xl font-bold py-4 px-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-brand-blue hover:translate-y-[-2px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue focus:ring-white"
        >
          אני מאשר ורוצה להתחיל!
        </button>
      </form>
    </section>
  );
};

export default ApprovalForm;