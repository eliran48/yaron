import React from 'react';

interface InvestmentProps {
  totalPrice: number;
}

const Investment: React.FC<InvestmentProps> = ({ totalPrice }) => {

  return (
    <section id="investment">
      <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-brand-lightblue pb-2 mt-8 mb-5 text-brand-blue">💰 ההשקעה ולוחות זמנים</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-50 p-5 rounded-lg">
        <div className="box p-5 rounded-lg bg-white border border-gray-200 text-center">
          <h3 className="mt-0 text-xl font-bold text-brand-blue">השקעה בפרויקט</h3>
          <div className="price text-5xl font-bold text-brand-blue my-2">{totalPrice.toLocaleString()} ₪</div>
          <div className="vat-details text-sm text-gray-600">
            <strong className="text-base">בתוספת מע"מ</strong>
          </div>
        </div>
        <div className="box p-5 rounded-lg bg-white border border-gray-200 text-center flex flex-col justify-center">
          <h3 className="mt-0 text-xl font-bold text-brand-blue">משך הפרויקט</h3>
          <div className="price text-5xl font-bold text-brand-blue my-2">עד 30</div>
          <div className="vat-details text-base text-gray-600">
            ימי עסקים
            <br />
            מרגע קבלת כלל החומרים והגישות.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
