import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './NaturalRubberSBR.css';
import nrSbrImage from '../assets/images/nr-sbr-sheeting.png';

function NaturalRubberSBR() {
  return (
    <div className="natural-rubber-sbr-page">
      <Helmet>
        <title>Natural Rubber / SBR Sheeting - North Rubber</title>
        <meta
          name="description"
          content="Explore North Rubber's high-quality Natural Rubber / SBR Sheeting products. Versatile and cost-effective solutions for various industries."
        />
      </Helmet>

      <div className="about-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Natural Rubber / SBR Sheeting
          </motion.h1>
        </div>
      </div>

      <div className="container">
        <motion.section 
          className="product-overview"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="product-image">
            <img src={nrSbrImage} alt="Natural Rubber / SBR Sheeting" />
          </div>
          <div className="product-description">
            <p>NR/SBR is commonly used in various industries due to its versatile properties and cost-effectiveness. The blend provides superior resilience, tensile, elongation, good low temperature flexibility and excellent adhesion to fabric and metals.</p>
            <p>NR/SBR is widely used in general purpose seals & gaskets, washers, packing material, vibration dampeners, shot blasting curtains and for industrial purpose application in contact with water and oil free surfaces and in various sectors like Automotive, Construction, Industrial Belts, Machinery, Sports & Recreation etc.</p>
          </div>
        </motion.section>

        <section className="product-dimension">
          <h2>ZENA-FLEX NR/SBR RUBBER SHEETS</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Colour</th>
                  <th>Specific Gravity<br/>Gm/cm³</th>
                  <th>Hardness (±5)<br/>SHORE A</th>
                  <th>Tensile Strength<br/>Kg/cm²(min)</th>
                  <th>Elongation %<br/>(min)</th>
                  <th>Finish Type</th>
                  <th>TDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NR/SBR 60130</td>
                  <td>Black</td>
                  <td>1.3</td>
                  <td>60</td>
                  <td>50</td>
                  <td>250</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                <tr>
                  <td>NR/SBR 65135</td>
                  <td>Black, Offwhite, Brick Red</td>
                  <td>1.35</td>
                  <td>65</td>
                  <td>50</td>
                  <td>250</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                <tr>
                  <td>AD70148</td>
                  <td>Black</td>
                  <td>1.5</td>
                  <td>70</td>
                  <td>35</td>
                  <td>200</td>
                  <td>Smooth/Matt</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>SX70150</td>
                  <td>Black</td>
                  <td>1.5</td>
                  <td>70</td>
                  <td>30</td>
                  <td>200</td>
                  <td>Smooth/Fabric</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>NR/SBR 70155</td>
                  <td>Black</td>
                  <td>1.55</td>
                  <td>70</td>
                  <td>30</td>
                  <td>200</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                 <tr>
                  <td>NR/SBR 70160</td>
                  <td>Black</td>
                  <td>1.6</td>
                  <td>70</td>
                  <td>30</td>
                  <td>200</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                 <tr>
                  <td>NR/SBR 70161</td>
                  <td>Black</td>
                  <td>1.60</td>
                  <td>70</td>
                  <td>30</td>
                  <td>200</td>
                  <td>with 1 ply fabric insertion</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                 <tr>
                  <td>NR/SBR 70162</td>
                  <td>Black</td>
                  <td>1.60</td>
                  <td>70</td>
                  <td>30</td>
                  <td>200</td>
                  <td>with 2 ply Fabric Insertion</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                 <tr>
                  <td>NR/SBR 70190</td>
                  <td>offwhite</td>
                  <td>1.9</td>
                  <td>70</td>
                  <td>15</td>
                  <td>130%</td>
                  <td>Fabric/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                 <tr>
                  <td>NR/SBR 75210</td>
                  <td>Black</td>
                  <td>2.1</td>
                  <td>75</td>
                  <td>15</td>
                  <td>150</td>
                  <td>Fabric/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="product-dimension">
          <h2>SHOT BLASTING RUBBER SHEET</h2>
          <h3>Zena Blast ECO</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Colour</th>
                  <th>Specific<br/>Gravity</th>
                  <th>Hardness (±5)<br/>SHORE A</th>
                  <th>Tensile Strength<br/>Kg/cm²(min)</th>
                  <th>Elongation %<br/>(min)</th>
                  <th>Finish Type</th>
                  <th>TDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NR/SBR 45130</td>
                  <td>Black, Offwhite, Red</td>
                  <td>1.30</td>
                  <td>45</td>
                  <td>50</td>
                  <td>250</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                <tr>
                  <td>NR/SBR 55132</td>
                  <td>Black, Offwhite, Red</td>
                  <td>1.32</td>
                  <td>55</td>
                  <td>50</td>
                  <td>250</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="product-dimension">
          <h3>Zena Blast Standard</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Colour</th>
                  <th>Specific Gravity</th>
                  <th>Hardness (±5) SHORE A</th>
                  <th>Tensile Strength Kg/cm2(min)</th>
                  <th>Elongation % (min)</th>
                  <th>Finish Type</th>
                  <th>TDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NR/SBR 45125</td>
                  <td>Black & Brick Red</td>
                  <td>1.25</td>
                  <td>45</td>
                  <td>100</td>
                  <td>450%</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                <tr>
                  <td>NR/SBR 65125</td>
                  <td>Black</td>
                  <td>1.25</td>
                  <td>65</td>
                  <td>100</td>
                  <td>350</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="product-dimension">
          <h3>Zena Blast Pro</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Colour</th>
                  <th>Specific Gravity</th>
                  <th>Hardness (±5) SHORE A</th>
                  <th>Tensile Strength Kg/cm2(min)</th>
                  <th>Elongation % (min)</th>
                  <th>Finish Type</th>
                  <th>TDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NR/SBR 40110</td>
                  <td>Black, Pink, Orange</td>
                  <td>1.10</td>
                  <td>40</td>
                  <td>165</td>
                  <td>600</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
                <tr>
                  <td>NR/SBR 60110</td>
                  <td>Black</td>
                  <td>1.10</td>
                  <td>60</td>
                  <td>150</td>
                  <td>500</td>
                  <td>Smooth/Fabric</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="product-dimension">
          <h2>NATURAL RUBBER SHEETS - FOOD GRADE</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Colour</th>
                  <th>Specific Gravity</th>
                  <th>Hardness (±5) SHORE A</th>
                  <th>Tensile Strength Kg/cm2(min)</th>
                  <th>Elongation % (min)</th>
                  <th>Polymer content</th>
                  <th>TDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SB 65150 FG</td>
                  <td>Offwhite</td>
                  <td>1.50</td>
                  <td>65</td>
                  <td>40</td>
                  <td>250</td>
                  <td>NR/SBR</td>
                  <td><button className="tds-btn" title="View Technical Data Sheet">TDS</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="standard-sizes">
          <h2>Standard Sizes</h2>
          <p><b>Standard Length:</b> 10 Mtr / 33 Ft</p>
          <p><b>Standard Width:</b> 1.2 / 1.4 / 1.5 / 2 Mtr / 4 / 4.6 / 4.92 / 6.56 Ft</p>
          <p><b>Standard Yard:</b> 1.33 / 1.53 / 1.64 / 2.18 Yard</p>
        </section>

        <section className="notes">
          <h2>Note</h2>
          <ol>
            <li>Sheets can be supplied with 1 or 2 ply insertion/s in Cotton, Nylon, Polyester, Glass Fibre etc.</li>
            <li>One side or both side smooth or fabric finish can be supplied.</li>
            <li>Specifications are subject to change without notice.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default NaturalRubberSBR;
