import React from 'react';
import type { Service } from '../types';

interface ScopeProps {
  services: Service[];
}

const ScopeItem: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <li className="bg-gray-50 p-4 rounded-lg border border-gray-200 border-r-4 border-brand-lightblue transition-all duration-300 hover:shadow-md flex items-start">
       <span className="text-brand-blue font-bold text-xl ml-4 pt-0.5">✓</span>
       <div className="flex-1">
          <strong className="text-lg text-brand-blue block mb-1">{service.title}</strong>
          <p className="text-gray-600">{service.description}</p>
          <span className="text-sm font-bold text-brand-blue">מחיר: {service.price.toLocaleString()} ₪</span>
        </div>
    </li>
  );
};

const Scope: React.FC<ScopeProps> = ({ services }) => {
  return (
    <section id="scope">
      <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-brand-lightblue pb-2 mt-8 mb-5 text-brand-blue">📋 תכולת הפרויקט</h2>
      <p className="mb-4 text-gray-700">להלן פירוט הסעיפים הכלולים בפרויקט. המחיר הכולל מפרט את כלל הסעיפים.</p>
      <ul className="space-y-4">
        {services.map(service => (
          <ScopeItem key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
};

export default Scope;
