import React from 'react';

const DemoVideo: React.FC = () => {
  return (
    <section id="demo-video">
      <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-brand-lightblue pb-2 mt-8 mb-5 text-brand-blue">🎥 הדגמת מערכת דומה</h2>
       <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
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
    </section>
  );
};

export default DemoVideo;