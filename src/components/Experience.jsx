import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Database Administrator',
      company: 'Enterprise Solutions Inc.',
      period: '2019 - Present',
      description: [
        'Lead a team of 5 DBAs managing over 200 production databases across multiple platforms',
        'Implemented performance optimization strategies resulting in 40% reduction in query response times',
        'Designed and deployed high-availability solutions with 99.99% uptime',
        'Developed automated monitoring and alerting systems for proactive issue resolution'
      ]
    },
    {
      title: 'Database Administrator',
      company: 'Tech Innovations Ltd.',
      period: '2016 - 2019',
      description: [
        'Managed SQL Server and Oracle database environments for a Fortune 500 company',
        'Led database migration projects with zero data loss and minimal downtime',
        'Implemented security best practices and compliance protocols',
        'Optimized database performance through query tuning and index optimization'
      ]
    },
    {
      title: 'Database Admnistrator',
      company: 'Data Systems Corp.',
      period: '2013 - 2016',
      description: [
        'Designed and developed database schemas for enterprise applications',
        'Created stored procedures, functions, and triggers for business logic implementation',
        'Collaborated with application developers to optimize database interactions',
        'Implemented ETL processes for data warehousing solutions'
      ]
    }
  ];

  const certifications = [
    'Microsoft Certified: Azure Database Administrator Associate',
    'Oracle Database Administrator Certified Professional',
    'AWS Certified Database - Specialty',
    'Certified Information Systems Security Professional (CISSP)'
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Experience</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Over 10 years of experience in database administration and optimization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-100"></div>
                
                <div className="ml-8 md:ml-0 card p-6">
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <div className="flex items-center mb-3 mt-1 text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className={`text-gray-600 space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white border border-primary-200 rounded-lg p-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary-500 mr-3"></div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;