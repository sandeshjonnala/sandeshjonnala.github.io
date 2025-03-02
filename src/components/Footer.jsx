import React from 'react';
import { Link } from 'react-scroll';
import { FaDatabase, FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-primary-400 text-2xl mr-2" />
              <span className="font-bold text-xl">SQL<span className="text-primary-400">Expert</span></span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional SQL Database Administrator offering expert services in database optimization, performance tuning, security, and maintenance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="mailto:contact@sqldbaexpert.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="hero" smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Database Design</li>
              <li className="text-gray-400">Performance Optimization</li>
              <li className="text-gray-400">Security & Compliance</li>
              <li className="text-gray-400">Database Administration</li>
              <li className="text-gray-400">Migration & Upgrades</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} SQL DBA Expert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;