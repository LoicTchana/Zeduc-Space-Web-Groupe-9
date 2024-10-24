import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import locationIcon from '../assets/localisation.png'; 
import HomeImage from '../assets/Icon.png'; 
import messageIcon from '../assets/Mail.png'; 
import phoneIcon from '../assets/Phone.png'; 
import './etudiantFooter.css'

const FooterEtudiant = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Colonne de gauche */}
        <div className="footer-left">
          <img src={locationIcon} alt="Location" style={{ marginRight: '10px' }} className='icon' />
          <span><b><em>DOUALA/ Yansoki</em></b></span>
        </div>

        {/* Colonne du milieu */}
        <div className="footer-center" style={{ textAlign: 'center' }}>
          <img src={HomeImage} alt="Restaurant" style={{ marginRight: '10px' }}className='icon' />
          <span><b><em>ZEDUC SPACE MIAM MIAM</em></b></span>
        </div>

        {/* Colonne de droite */}
        <div className="footer-right">
          <div>
            <img src={messageIcon} alt="Email" style={{ marginRight: '10px' }}className='icon' />
            <span><b><em>zeducspace@gmail.com</em></b></span>
          </div>
          <div>
            <img src={phoneIcon} alt="Téléphone" style={{ marginRight: '20px' }} className='icon'/>
            <span>TEL:<b>+237 6 58 43 45 72</b></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEtudiant;
