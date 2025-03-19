import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu toggle

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='p-4  text-white fixed top-0 w-full z-10'>
      <div className='max-w-[1170px] mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-2xl'>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div>
          <NavLink to="/">
            <h1 className='font-bold text-2xl'>WorldAtlos</h1>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex gap-4 font-bold'>
            <li><NavLink to="/" className='hover:text-blue-300'>Home</NavLink></li>
            <li><NavLink to="/about" className='hover:text-blue-300'>About</NavLink></li>
            <li><NavLink to="/country" className='hover:text-blue-300'>Country</NavLink></li>
            <li><NavLink to="/contact" className='hover:text-blue-300'>Contact</NavLink></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        
      </div>
        
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className='md:hidden bg-[#161616] w-[100px] pl-4'>
          <ul className='flex flex-col items-left gap-4 py-4 font-bold'>
            <li><NavLink to="/" onClick={toggleMenu} className='hover:text-blue-300'>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu} className='hover:text-blue-300'>About</NavLink></li>
            <li><NavLink to="/country" onClick={toggleMenu} className='hover:text-blue-300'>Country</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu} className='hover:text-blue-300'>Contact</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;