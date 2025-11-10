import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <div className="text-gray-800 leading-relaxed">
      <div className="max-w-4xl mx-auto my-5 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <Header />
        <main className="p-6 md:p-10">
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;