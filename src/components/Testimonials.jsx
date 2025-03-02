import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechCorp',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: 'Working with this SQL expert transformed our database performance. Query times were reduced by 60%, and our system stability improved dramatically. The level of expertise and professionalism is outstanding.'
    },
    {
      name: 'Michael Chen',
      position: 'IT Director, Global Enterprises',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: 'We hired this database consultant to help with our complex migration project. The transition was seamless with zero data loss. Their attention to detail and thorough planning made all the difference.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Lead Developer, Innovative Solutions',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'Our database was experiencing critical performance issues that were affecting our business operations. After implementing the recommended optimizations, our system is now running faster than ever. Highly recommended!'
    },
    {
      name: 'David Wilson',
      position: 'CEO, StartUp Ventures',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      text: 'As a growing startup, we needed expert guidance on our database architecture. The solutions provided were not only technically sound but also scalable for our future growth. A true database expert!'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            What my clients say about my database administration services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 flex flex-col h-full">
                <FaQuoteLeft className="text-primary-300 text-4xl mb-4" />
                <p className="text-gray-600 italic flex-grow">{testimonial.text}</p>
                <div className="mt-6 flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonials Carousel */}
          <div className="md:hidden">
            <div className="card p-6">
              <FaQuoteLeft className="text-primary-300 text-4xl mb-4" />
              <p className="text-gray-600 italic">{testimonials[currentIndex].text}</p>
              <div className="mt-6 flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to optimize your database?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how I can help improve your database performance and security.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

// Add the missing import
import { Link } from 'react-scroll';

export default Testimonials;