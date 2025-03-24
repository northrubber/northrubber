import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Testimonials() {
  return (
    <motion.section 
      className="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider">
        {[
          { 
            text: "aaxi delivered exceptional quality and precision for our industrial equipment project. Their team's expertise and attention to detail exceeded our expectations.", 
            author: "John Smith", 
            company: "Construction Ltd." 
          },
          { 
            text: "We've been working with aaxi for over 5 years now, and they consistently provide high-quality metal fabrication services with quick turnaround times.", 
            author: "Sarah Johnson", 
            company: "Industrial Solutions Inc." 
          }
        ].map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">{testimonial.author}</p>
            <p className="testimonial-company">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Testimonials;
