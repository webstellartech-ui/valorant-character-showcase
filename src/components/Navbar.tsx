import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center opacity-70 pointer-events-none">
      <div className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-light text-slate-800">
        Valorant Agents Showcase
      </div>
    </nav>
  );
};

export default Navbar;