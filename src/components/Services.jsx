import React from 'react';
import { FaDatabase, FaServer, FaShieldAlt, FaChartLine, FaCloudUploadAlt, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDatabase className="text-4xl text-primary-600 mb-4" />,
      title: 'Database Design & Architecture',
      description: 'Expert design of efficient, scalable database structures optimized for your specific business needs and performance requirements.'
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-600 mb-4" />,
      title: 'Performance Optimization',
      description: 'Identify and resolve performance bottlenecks through query optimization, indexing strategies, and database configuration tuning.'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-600 mb-4" />,
      title: 'Security & Compliance',
      description: 'Implement robust security measures, access controls, and compliance protocols to protect your valuable data assets.'
    },
    {
      icon: <FaServer className="text-4xl text-primary-600 mb-4" />,
      title: 'Database Administration',
      description: 'Comprehensive management of your database environment including monitoring, maintenance, and troubleshooting.'
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-primary-600 mb-4" />,
      title: 'Migration & Upgrades',
      description: 'Seamless migration between database platforms or versions with minimal downtime and data integrity preservation.'
    },
    {
      icon: <FaTools className="text-4xl text-primary-600 mb-4" />,
      title: 'Disaster Recovery',
      description: 'Develop and implement comprehensive backup and recovery strategies to ensure business continuity in any scenario.'
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive database solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-6 flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Need a custom database solution?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I offer tailored database consulting services to address your specific challenges and requirements.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-primary"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// Add the missing import
import { Link } from 'react-scroll';

export default Services;