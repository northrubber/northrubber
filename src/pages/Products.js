import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './Products.css';

// Import product images (you'll need to add these to your assets)
import industrialSheetImg from '../assets/images/industrial-rubber-sheet.jpg';
import wearResistantImg from '../assets/images/wear-resistant-sheet.jpg';
import rubberFlooringImg from '../assets/images/rubber-flooring.jpg';
import transitFlooringImg from '../assets/images/transit-flooring.jpg';
import antiSkidImg from '../assets/images/anti-skid-flooring.jpg';
import coatedFabricImg from '../assets/images/coated-fabric.jpg';

const productsData = [
  {
    id: 1,
    title: 'Industrial Rubber Sheets',
    description: 'High-quality industrial rubber sheets designed for various industrial applications with excellent durability and chemical resistance.',
    image: industrialSheetImg,
    category: 'industrial',
    features: ['Chemical Resistant', 'High Durability', 'Multiple Thicknesses']
  },
  {
    id: 2,
    title: 'Wear Resistant Rubber Sheets',
    description: 'Specially engineered rubber sheets that provide superior wear resistance for high-traffic and abrasive environments.',
    image: wearResistantImg,
    category: 'industrial',
    features: ['Superior Wear Resistance', 'Long Lasting', 'Cost Effective']
  },
  {
    id: 3,
    title: 'Rubber Flooring',
    description: 'Premium rubber flooring solutions offering comfort, safety, and durability for commercial and industrial spaces.',
    image: rubberFlooringImg,
    category: 'flooring',
    features: ['Slip Resistant', 'Easy to Clean', 'Comfortable Surface']
  },
  {
    id: 4,
    title: 'Transit Rubber Flooring',
    description: 'Specialized rubber flooring designed for transportation vehicles, providing safety and comfort during transit.',
    image: transitFlooringImg,
    category: 'flooring',
    features: ['Anti-Slip Design', 'Weather Resistant', 'Easy Installation']
  },
  {
    id: 5,
    title: 'Anti-Skid Flooring',
    description: 'Safety-focused anti-skid flooring solutions that prevent slips and falls in wet or high-risk environments.',
    image: antiSkidImg,
    category: 'flooring',
    features: ['Maximum Grip', 'Water Resistant', 'Safety Compliant']
  },
  {
    id: 6,
    title: 'Coated Fabric',
    description: 'Versatile coated fabrics with rubber backing, ideal for protective covers, industrial applications, and waterproofing.',
    image: coatedFabricImg,
    category: 'specialty',
    features: ['Waterproof', 'Flexible', 'Multi-Purpose']
  },
  {
    id: 7,
    title: 'EPDM Water Proofing Solutions',
    description: 'Advanced EPDM membrane systems for superior waterproofing in roofing and structural applications.',
    image: industrialSheetImg,
    category: 'waterproofing',
    features: ['Weather Resistant', 'Long Lasting', 'Easy Installation']
  },
  {
    id: 8,
    title: 'Inflatables',
    description: 'Precision-engineered inflatable products for marine, defense, and industrial applications.',
    image: wearResistantImg,
    category: 'inflatables',
    features: ['High Strength', 'Puncture Resistant', 'Custom Design']
  },
  {
    id: 9,
    title: 'Custom Molded & Extrusion',
    description: 'Custom rubber molding and extrusion services for specialized industrial applications.',
    image: rubberFlooringImg,
    category: 'custom',
    features: ['Custom Design', 'Precision Manufacturing', 'Quality Assured']
  },
  {
    id: 10,
    title: 'Rubber Compounds',
    description: 'Specialized rubber compounds formulated for specific industrial and commercial applications.',
    image: transitFlooringImg,
    category: 'compounds',
    features: ['Custom Formulation', 'High Performance', 'Industry Specific']
  }
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'industrial', name: 'Industrial Sheets' },
  { id: 'flooring', name: 'Flooring Solutions' },
  { id: 'waterproofing', name: 'EPDM Water Proofing' },
  { id: 'specialty', name: 'Coated Fabric' },
  { id: 'inflatables', name: 'Inflatables' },
  { id: 'custom', name: 'Custom Molded & Extrusion' },
  { id: 'compounds', name: 'Rubber Compounds' }
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <Helmet>
        <meta name="description" content="Explore North Rubber's comprehensive range of industrial rubber products including sheets, flooring, and specialty items." />
        <meta name="keywords" content="rubber sheets, industrial rubber, rubber flooring, anti-skid flooring, coated fabric" />
        <link rel="canonical" href="https://zenithindustry.github.io/zenithindustries/products" />
      </Helmet>
      
      <div className="products-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Product Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our comprehensive range of rubber products tailored for various industrial applications.
          </motion.p>
        </div>
      </div>

      <section className="products-main">
        <div className="container">
          <div className="products-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;