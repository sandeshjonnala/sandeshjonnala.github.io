import React from 'react';
import { Link } from 'react-scroll';
import { FaDatabase, FaServer, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Expert SQL Database <span className="text-primary-600">Administration</span> Services
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            I'm a professional SQL Database Administrator with extensive experience optimizing database performance, ensuring data security, and implementing best practices for enterprise-level systems.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-primary"
            >
              My Services
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-outline"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-200 rounded-full opacity-20 transform -rotate-6"></div>
            <div className="relative bg-white rounded-lg shadow-xl p-8 z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4 bg-primary-50 rounded-lg">
                  <FaDatabase className="text-4xl text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-800">Database Optimization</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary-50 rounded-lg">
                  <FaServer className="text-4xl text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-800">Server Management</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary-50 rounded-lg">
                  <FaShieldAlt className="text-4xl text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-800">Data Security</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary-50 rounded-lg">
                  <FaChartLine className="text-4xl text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-800">Performance Tuning</h3>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 font-medium">10+ years of experience with enterprise databases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;