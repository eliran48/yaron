import React from 'react';

const ProcessFlow: React.FC = () => {
  return (
    <section id="process-flow">
      <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-brand-lightblue pb-2 mt-8 mb-5 text-brand-blue">📜 תהליך העבודה והאפיון</h2>
      <p className="mb-4 text-gray-700">כדי להבטיח שהמערכת תענה בדיוק על הצרכים שלך, בנינו תהליך ויזואלי ברור שממפה את מסע הליד מרגע הקליטה ועד להפיכתו ללקוח משלם.</p>
       <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white p-4">
            <img src="https://i.postimg.cc/Mp9ZV1r8/visual-selection.png" alt="תרשים אפיון תהליך קליטת ליד" className="w-full h-auto block" />
        </div>
    </section>
  );
};

export default ProcessFlow;
