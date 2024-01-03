// Montage.js

import React from 'react';
import montage_pics from "../../../assets/images/products/montage_pics.webp";
import './Montage.css';

const Montage = () => {
  return (
    <div className="montage-fullpage">
      <div className="montage-container">
        <div className="montage-header">
          <h1 className="montage-title">Assembly</h1>
          <img src={montage_pics} alt="montage_pics" className="montage-image" />
        </div>
        <div className="montage-description">
          <p>
            <span style={{ fontSize: '30px'} }>
              <strong>
                You can take care of the assembly, but it's not<br></br>mandatory.
              </strong><br />
            </span>
            To make things easier for you,
            we offer a service that will take care of assembling your AKIA items at your<br></br>
            home or workplace.
          </p>
        </div>
        <div className="montage-details">
          <div className="montage-price">
            <p className="montage-price-title">Included Services:</p>
            <ul className="montage-service-list">
              <li><strong>For only 100 DH.</strong></li>
              <li>For any furniture, from individual pieces to complete kitchens or wardrobes.</li>
              <li>Includes the removal and recycling of all packaging materials.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Montage;
