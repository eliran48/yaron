import React from 'react';

interface CharacterizationPageProps {
  onBack: () => void;
}

const CharacterizationPage: React.FC<CharacterizationPageProps> = ({ onBack }) => {
  return (
    <div>
        <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-brand-blue">אפיון תהליך קליטת ליד</h1>
            <button 
                onClick={onBack}
                className="bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>חזרה</span>
            </button>
        </header>
        <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white p-4">
            <img src="https://i.postimg.cc/Mp9ZV1r8/visual-selection.png" alt="תרשים אפיון תהליך קליטת ליד" className="w-full h-auto block" />
        </div>
    </div>
  );
};

export default CharacterizationPage;