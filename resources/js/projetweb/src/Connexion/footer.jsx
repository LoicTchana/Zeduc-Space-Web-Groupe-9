import React from 'react';
import { Container } from 'react-bootstrap';
import phoneIcon from '../assets/Phone.png'; // Remplace par le chemin de ton icône
import locationIcon from '../assets/localisation.png'; // Remplace par le chemin de ton icône
import homeIcon from '../assets/Icon.png'; // Remplace par le chemin de ton icône
import messageIcon from '../assets/Mail.png'; // Remplace par le chemin de ton icône
import './footer.css'; // Assurez-vous de créer ce fichier pour les styles

const Footer = () => {
  return (
    <footer className="footer">
      
        <div className="footer-content">

          <div className="footer-item1">
            <img src={phoneIcon} alt="Téléphone" className="footer-icon" />
            <span className='TEL'>TEL: +237 658434572</span> 
            <img src={homeIcon} alt="Maison" className="footer-icon" />
            <span className='Zeduc'>ZEDUC SPACE</span>    
          </div>

           <div className='footer-item2'>
            <img src={locationIcon} alt="Localisation" className="footer-icon" />
            <span className='localisation'>Douala/Yansoki</span>
            <img src={messageIcon} alt="Message" className="footer-icon" />
            <span className='Message'>Zeducspace@gmail.com</span>
           </div>
          

          
          
        </div>
     
    </footer>
  );
};

export default Footer;

