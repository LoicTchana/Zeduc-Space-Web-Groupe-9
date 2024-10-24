import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../assets/Rectangle 2.png'; // Assurez-vous que le chemin est correct
import './main.css';

const MainContent = () => {
  const [Username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  setTimeout(() => {
    if (email === 'test@test.com' && password === '123456') {
      // Simulate successful login
      setSuccess('Connexion réussie!');
      setError('');
      alert('Connexion réussie!');
    } else {
      // Simulate login failure
      setError('Erreur lors de la connexion. Vérifiez vos identifiants.');
      setSuccess('');
      alert('Erreur! Vérifiez vos identifiants.');
    }
  }, 1000); // Simulate a 1 second delay
};

const handleClick = () =>{
  navigate('/Inscription');
};

/*
  try{
    const response = await axios.post('http://localhost:8000/api/login', {
      Username,
      email,
      password
    });

    setSuccess('connexion reussie!');
    alert('Connexion reussie!');
    setError('');
  } catch (err) {
    setError('Erreur Lors de la Connexionn. Verifiez vos identifiants');
    alert('Erreur ! Verifiez vos identifiant');
    setSuccess('');
  }
};*/

    return (
        <div className="container" style={{ margin: 0, padding: 0 }}>

         <div className="left">
            <img src={image} alt="Logo" className="imagerepas1" />
         </div>

            <div className="right">
             <h5  className='Connectiontext'>CONNEXION A LA PAGE</h5>
             <br/>

             <div className='connection'>
                
             <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input type ="text"
                     value ={Username}
                     onChange={(e) => setUsername(e.target.value)}>
                     </input>

              <label>Email</label>
              <input  type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
               
            />

            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              
            />

            <div>
              <a href="#d">Mot de passe oublié?</a>
            </div>
              <button className='btnconnection' type='submit'>SING-IN</button>
              <button className='btninscription' onClick={handleClick}>SIGN-UP</button>
              </form>
              {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

             </div>

            </div>
        
        </div>
    );
  };
  
export default  MainContent;