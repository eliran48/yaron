import React from 'react';

interface AppendicesPageProps {
  onBack: () => void;
}

const AppendicesPage: React.FC<AppendicesPageProps> = ({ onBack }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-blue">נספחים</h1>
        <button 
          onClick={onBack}
          className="bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span>חזרה</span>
        </button>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-brand-blue mb-2">נספח א' - סרטון הדגמה</h2>
        <p className="text-gray-700 mb-4">
          כדי שתוכל להתרשם מהיכולות, צירפנו סרטון המדגים כיצד ניתן לבנות מערכת CRM גמישה באמצעות הכלים שנשתמש בהם בפרויקט. הסרטון ממחיש את ה-CRM בפעולה ואת הפוטנציאל של האוטומציות.
        </p>
        <div className="aspect-video w-full">
            <iframe 
                className="w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/n_y4k8y_t4w" 
                title="הדגמת בניית CRM ואוטומציה עם Airtable" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AppendicesPage;