import React from 'react';

interface InvestmentProps {
  totalPrice: number;
}

const Investment: React.FC<InvestmentProps> = ({ totalPrice }) => {
  const vat = totalPrice * 0.17;
  const totalWithVat = totalPrice + vat;

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">השקעה</h2>
      <div className="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">סה"כ לתשלום (לפני מע"מ):</span>
          <span className="font-bold text-lg text-gray-900">₪{totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">מע"מ (17%):</span>
          <span className="font-bold text-lg text-gray-900">₪{vat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="border-t border-gray-300 my-2"></div>
        <div className="flex justify-between items-center font-bold text-xl text-brand-blue">
          <span>סה"כ לתשלום (כולל מע"מ):</span>
          <span>₪{totalWithVat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">*התשלום יתבצע בהעברה בנקאית או באשראי (ניתן לחלק לתשלומים).</p>
    </section>
  );
};

export default Investment;
