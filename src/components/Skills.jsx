import React from 'react';
import { FaDatabase, FaServer, FaCode, FaCloudUploadAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Database Systems',
      icon: <FaDatabase className="text-3xl text-primary-600 mb-3" />,
      skills: [
        { name: 'Microsoft SQL Server', level: 95 },
        { name: 'Oracle Database', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'Database Administration',
      icon: <FaServer className="text-3xl text-primary-600 mb-3" />,
      skills: [
        { name: 'Performance Tuning', level: 95 },
        { name: 'Backup & Recovery', level: 90 },
        { name: 'High Availability', level: 85 },
        { name: 'Disaster Recovery', level: 90 },
        { name: 'Database Security', level: 90 },
        { name: 'Database Migration', level: 85 }
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: <FaCode className="text-3xl text-primary-600 mb-3" />,
      skills: [
        { name: 'T-SQL', level: 95 },
        { name: 'PL/SQL', level: 90 },
        { name: 'PowerShell', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Bash Scripting', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Skills</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise across multiple database platforms and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <div className="flex flex-col items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center text-center">
            <FaChartLine className="text-3xl text-primary-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Optimization</h3>
            <p className="text-gray-600">Expert in query optimization, indexing strategies, and server configuration tuning</p>
          </div>
          <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center text-center">
            <FaShieldAlt className="text-3xl text-primary-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Security & Compliance</h3>
            <p className="text-gray-600">Implementation of robust security measures and compliance protocols</p>
          </div>
          <div className="bg-primary-50 rounded-lg p-6 flex flex-col items-center text-center">
            <FaCloudUploadAlt className="text-3xl text-primary-600 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Database Services</h3>
            <p className="text-gray-600">Experience with AWS RDS, Azure SQL, Google Cloud SQL, and other cloud platforms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;