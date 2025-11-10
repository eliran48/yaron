import React from 'react';

const ApprovalForm: React.FC = () => {
  return (
    <section className="mt-12 pt-8 border-t-2 border-gray-200">
      <h2 className="text-2xl font-bold text-brand-blue mb-4 text-center">אישור הצעת מחיר</h2>
      <p className="text-center text-gray-600 mb-6">
        אני מאשר את תנאי ההצעה ומעוניין להתחיל בתהליך.
      </p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">שם מלא</label>
          <input type="text" id="fullName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">תאריך</label>
          <input type="date" id="date" defaultValue={new Date().toISOString().substring(0, 10)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" />
        </div>
        <div className="mb-6">
          <label htmlFor="signature" className="block text-gray-700 font-semibold mb-2">חתימה</label>
          <div className="w-full h-32 bg-gray-100 border border-dashed border-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">יש לחתום כאן</span>
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-lg">
          אישור ושליחה
        </button>
      </form>
    </section>
  );
};

export default ApprovalForm;
