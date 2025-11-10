import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-6 md:p-10 flex justify-between items-center border-b-2 border-brand-blue bg-white">
      <div className="logo-client">
        <img src="https://www.yaronw.co.il/wp-content/uploads/2016/03/%D7%9C%D7%95%D7%92%D7%95-%D7%A8%D7%90%D7%A9%D7%99.png" alt="לוגו לקוח" className="max-w-[150px] h-auto" />
      </div>
      <div className="logo-provider">
        <img src="https://i0.wp.com/eliranor.com/wp-content/uploads/2020/02/eliran-OR-%D7%9C%D7%95%D7%92%D7%95-%D7%A9%D7%A0%D7%99-%D7%A9%D7%A7%D7%95%D7%A3.png?fit=500%2C500&ssl=1" alt="אלירן אור - מתכנן תהליכי שיווק ואוטומציה" className="max-w-[200px] h-auto" />
      </div>
    </header>
  );
};

export default Header;
