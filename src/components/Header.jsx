import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaDatabase } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="flex items-center cursor-pointer">
          <FaDatabase className="text-primary-600 text-2xl mr-2" />
          <span className="font-bold text-xl text-gray-800">SQL<span className="text-primary-600">Expert</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className={`text-sm font-medium cursor-pointer transition-colors hover:text-primary-600 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-primary py-2 px-4"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden menu-button focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <HiX className="h-6 w-6 text-gray-800" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute top-full left-0 w-full shadow-md`}>
        <div className="px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="block text-gray-700 font-medium hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-primary w-full flex justify-center"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;