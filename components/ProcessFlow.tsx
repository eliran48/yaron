import React from 'react';

const ProcessFlow: React.FC = () => {
  return (
    <section className="mb-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-4">תרשים תהליך העבודה</h2>
        <p className="text-gray-700 mb-4">
            להלן תרשים זרימה המתאר את התהליך האוטומטי לקליטת ליד חדש, החל מהגעתו ועד לסגירת עסקה.
        </p>
        <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white p-4">
            <img src="https://i.postimg.cc/Mp9ZV1r8/visual-selection.png" alt="תרשים תהליך קליטת ליד" className="w-full h-auto block" />
        </div>
    </section>
  );
};

export default ProcessFlow;
