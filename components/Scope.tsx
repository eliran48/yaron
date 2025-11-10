import React from 'react';
import type { Service } from '../types';

interface ScopeProps {
  services: Service[];
}

const Scope: React.FC<ScopeProps> = ({ services }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">היקף העבודה</h2>
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-bold text-lg text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scope;
