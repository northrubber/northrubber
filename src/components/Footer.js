import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Industrial Rubber Sheet</h3>
          <ul>
            <li>Overview</li>
            <li>Natural Rubber / SBR Sheeting</li>
            <li>Butyl Rubber Sheeting</li>
            <li>Chloroprene Rubber Sheeting</li>
            <li>Diaphragm Rubber Sheeting</li>
            <li>EPDM Rubber Sheeting</li>
            <li>Flouro Elastomer Rubber Sheeting</li>
            <li>Hypalon Rubber Sheeting</li>
            <li>Nitrile Rubber Sheeting</li>
            <li>HNBR Rubber Sheeting</li>
            <li>Food Grade Rubber Sheet</li>
            <li>Electrical Insulation Rubber Matting</li>
            <li>Potable Water Rubber Sheeting</li>
            <li>Silicone Rubber Sheeting</li>
          </ul>
          <h3>Rubber Flooring</h3>
          <ul>
            <li>Overview</li>
            <li>Duraflor Marbles</li>
            <li>Duraflor Solids</li>
            <li>Duraflor Speckles</li>
          </ul>
          <h3>Rubber Compounds</h3>
          <ul>
            <li>Custom Compound</li>
            <li>Jewellery Rubber Compound</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Wear Resistant Rubber Sheet</h3>
          <ul>
            <li>Overview</li>
            <li><Link to="/natural-rubber-sbr">Natural Rubber / SBR Sheeting</Link></li>
            <li>Abra-Super® Rubber Sheeting</li>
            <li>Abra-Line Rubber Sheeting</li>
            <li>Abra-Max Rubber Sheeting</li>
            <li>Abra-Tuff Rubber Sheeting</li>
            <li>Abra-Wear Rubber Sheeting</li>
            <li>Abra-Eco Rubber Sheeting</li>
          </ul>
          <h3>Specialised Abrasion Resistance Rubber Sheeting</h3>
          <ul>
            <li>Abra-Prene FR Sheeting</li>
            <li>Abra-Super OZ Sheeting</li>
            <li>Abra-Super FG Sheeting</li>
            <li>Abra-Trile Sheeting</li>
            <li>Abra-FRAS Sheeting</li>
          </ul>
          <h3>Transit Rubber Flooring</h3>
          <ul>
            <li>Overview</li>
            <li>DuraFlor Multipurpose Floor Covering</li>
            <li>Dura-Tranz Fire Retardant Floor Covering</li>
            <li>One Piece Floor</li>
            <li>Step Treads</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>EPDM Water Proofing Solutions</h3>
          <ul>
            <li>ZENA-SEAL EPDM Water roofing membrane</li>
            <li>ZEP - 1000 (Contact Adhesive)</li>
            <li>ZAFIX (Overlap sealant)</li>
            <li>ZEBTAPE (High performance butyl sealing tape)</li>
          </ul>
          <h3>Anti-Skid Flooring</h3>
          <ul>
            <li>Overview</li>
            <li>Fine Rib Mat</li>
            <li>Mini Fine Rib Mat</li>
            <li>Flat Rib Mat</li>
            <li>Broad Rib Mat</li>
            <li>Wide Rib Mat</li>
            <li>Truck Rib Mat</li>
            <li>Transit Rib Mat</li>
            <li>Diamond Design Mat</li>
            <li>Square Stud Mat</li>
            <li>Checkered Mat</li>
            <li>Diamond Checkered Mat</li>
            <li>Coin Mat</li>
            <li>Amoeba Mat</li>
            <li>Antiskid Gym Flooring</li>
          </ul>
          <h3>Custom Molded & Extrusion</h3>
          <ul>
            <li>Custom Moulded Products</li>
            <li>Extruded Rubber Products</li>
            <li>Rubber Anti Vibration Pads</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Coated Fabric</h3>
          <ul>
            <li>Overview</li>
            <li>ZRF® Defense Application</li>
            <li>ZRF® Inflatable Application</li>
            <li>ZRF® Industrial Application</li>
            <li>Selection Chart</li>
          </ul>
          <h3>Inflatables</h3>
          <ul>
            <li>Overview</li>
            <li>Aircell</li>
            <li>Gas Holder Balloon</li>
            <li>Inflatable Work Boats</li>
            <li>Life Raft</li>
            <li>Storage Tanks</li>
            <li>Surge Bladder</li>
            <li>Oil Boom</li>
            <li>Aircraft Lifting Bag</li>
          </ul>
        </div>
      </div>
      <div className="footer-address">
        <div className="address-info">
          <p>144, Free Press House, 215 Nariman Point, Mumbai 400 021.</p>
          <div className="contact-row">
            <p>Email: info@zenithindustries.com</p>
            <p>Phone: +91 22 22885888</p>
          </div>
        </div>
        <div className="copyright-info">
          <p>© 2025. Zenith Rubber. All Rights Reserved. Site Created by Designscape</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
