import React from 'react';
import image from '../assets/Rectangle 2.png'; // Assurez-vous que le chemin est correct
import './main.css';

const MainContent = () => {
  
    return (
        <div className="container" style={{ margin: 0, padding: 0 }}> {/*division principale de la page séparée en 02 par la suite*/}

         {/*partie gauche qui contient l'image */}
         <div className="left">
            <img src={image} alt="Logo" className="imagerepas1" />
         </div>

            {/*partie droite qui contient les labels et les inputs pour la connexion de l'utilisateur */}
            <div className="right">
             <h5  class='Connectiontext'>CONNEXION A LA PAGE</h5>
             <br/>

             <div class='connection'>
                
              <label>USERNAME</label>
              <input type='text'></input>
              <label>Mail</label>
              <input type='email'></input>
              <label>PASSWORD</label>
              <input type='text'></input>
              <a href='#d'>Mot de passe oublié?</a>
              <button class='btnconnection' type='submit'>CONNEXION</button>
              <p class='pas-de-compte'>Vous n'avez pas de compte?</p>
              <button class='btninscription'>Inscription</button>

             </div>

            </div>
        
        </div>
    );
  };
export default  MainContent;