
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-8 text-sm text-gray-600 border-t border-gray-200">
      <p>
        <strong className="block text-base text-gray-800">אלירן אור | מתכנן תהליכי שיווק ואוטומציה</strong>
        <span className="mt-1 block">
          טלפון: <a href="tel:0553187548" className="text-brand-blue font-semibold hover:underline">055-3187548</a> | 
          דוא"ל: <a href="mailto:info@eliranor.com" className="text-brand-blue font-semibold hover:underline">info@eliranor.com</a> | 
          אתר: <a href="https://eliranor.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:underline">eliranor.com</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
