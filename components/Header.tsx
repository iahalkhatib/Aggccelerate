import React, { useState, useRef, useEffect } from 'react';
import { MenuIcon } from './Icons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center">
        {/* Left Section */}
        <div className="relative" ref={menuRef}>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <span className="font-inter text-sm font-bold tracking-wider text-gray-300 hidden sm:block">AGGCCELERATE</span>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full mt-2 w-48 bg-black/50 border border-gray-700 rounded-lg backdrop-blur-lg shadow-lg z-50">
              <ul className="py-1">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-t-md">Artifacts</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50">History</a>
                </li>
                 <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50">Settings</a>
                </li>
                <li className="border-t border-gray-700 my-1"></li>
                 <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-b-md">Sign Out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Right Section (placeholder for balance) */}
        <div className="w-px h-px sm:w-[150px]"></div>
      </div>

      {/* Center Section */}
      <div className="text-center mt-2 sm:-mt-4">
        <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-widest">
          ORCHESTRA
        </h1>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Orchestrate Intelligence — Your AI, Conducted to Perfection.
        </p>
      </div>
    </header>
  );
};
