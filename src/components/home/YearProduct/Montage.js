// Montage.js

import React from 'react';
import montage_pics from "../../../assets/images/products/montage_pics.webp";
import './Montage.css';

const Montage = () => {
  return (
    <div className="montage-fullpage">
      <div className="montage-container">
        <div className="montage-header">
          <h1 className="montage-title">Montage</h1>
          <img src={montage_pics} alt="montage_pics" className="montage-image" />
        </div>
        <div className="montage-description">
          <p>
            <span style={{ fontSize: '30px'} }>
              <strong>
                Vous pouvez vous charger du montage, mais ce n’est pas<br></br> une obligation.
              </strong><br />
            </span>
            Pour vous faciliter les choses,
            nous vous proposons un service qui se chargera de monter vos articles AKIA, chez vous<br></br>
            ou sur votre lieu de travail.
          </p>
        </div>
        <div className="montage-details">
          <div className="montage-price">
            <p className="montage-price-title">Services inclus :</p>
            <ul className="montage-service-list">
              <li><strong>Pour seulement 100 DH.</strong></li>
              <li>Pour tout mobilier, de la pièce unique à la cuisine ou armoire-penderie complète.</li>
              <li>Comprend l’enlèvement et le recyclage de tous les emballages.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Montage;
