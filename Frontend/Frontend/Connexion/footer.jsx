import React from 'react';
import { Container } from 'react-bootstrap';
import phoneIcon from '../assets/Phone.png'; 
import locationIcon from '../assets/localisation.png'; 
import homeIcon from '../assets/Icon.png'; 
import messageIcon from '../assets/Mail.png'; 
import './footer.css'; //Fichier pour les styles

const Footer = () => {
  return (
    <footer className="footer"> {/*division principale pour le pied de page */}
      
        <div className="footer-content"> {/*1ère division qui contient les icones de telephone et une image de Maison avec les noms à côté */}

          <div className="footer-item1">
            <img src={phoneIcon} alt="Téléphone" className="footer-icon" />
            <span className='TEL'>TEL: +237 658434572</span> 
            <img src={homeIcon} alt="Maison" className="footer-icon" />
            <span className='Zeduc'>ZEDUC SPACE</span>    
          </div>

           <div className='footer-item2'> {/*2ème division*/}
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

