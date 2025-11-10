import React, { useState, useMemo } from 'react';
import type { Service } from '../types';
import { INITIAL_SERVICES } from '../constants';
import Scope from './Scope';
import Investment from './Investment';
import Terms from './Terms';
import ApprovalForm from './ApprovalForm';
import PlatformsAndCosts from './PlatformsAndCosts';

interface QuotePageProps {
  onBack: () => void;
}

const QuotePage: React.FC<QuotePageProps> = ({ onBack }) => {
  const [services] = useState<Service[]>(INITIAL_SERVICES);
  
  const totalPrice = useMemo(() => {
    return services
      .filter(service => service.selected)
      .reduce((sum, service) => sum + service.price, 0);
  }, [services]);

  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-brand-blue">הצעת מחיר</h1>
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
      <Scope services={services} />
      <Investment totalPrice={totalPrice} />
      <PlatformsAndCosts />
      <Terms />
      <ApprovalForm />
    </div>
  );
};

export default QuotePage;
