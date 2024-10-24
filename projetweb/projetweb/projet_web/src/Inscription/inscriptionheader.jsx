import React, { useState } from 'react';
import axios from 'axios';
import './inscriptionheader.css'   // On va ajouter un fichier CSS pour les styles
import Zeducimage from '../assets/Zeduc.jpg'; 
import Homeimage from '../assets/Icon.png';


const InscriptionHeader = () => {
  
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telephone,setTelephone] = useState('');
  const [success,setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      if (email === 'test@test.com' && password === '123456') {
      
        // Simulate successful login
        setSuccess('Inscription réussie!');
        setError('');
        alert('Inscription réussie!');
        return;
       }else {
        // Simulate login failure
        setError('Erreur lors de la connexion. Vérifiez vos identifiants.');
        setSuccess('');
        alert('Erreur! Vérifiez vos identifiants.');
      }
    }, 1000); // Simulate a 1 second delay
  };


{/* 

  try{
    const response = await axios.post('http://localhost:8000/api/login', {
      username,
      email,
      password,
      telephone
    });
    
    if (response.status === 200){
      setSuccess('connexion reussie!');
      alert('Connexion reussie!');
      setError('');
    }
  } catch (err) {
    if (err.response && err.response.status === 401 ) {
      setError('Erreur lors de la connexion. Vérifiez vos identifiants.');
  } else {
      setError('Une erreur s\'est produite.');
  }
  alert('Erreur ! Vérifiez vos identifiants');
  setSuccess('');
  }
};
*/}
  
return (
  <header className="inscription-header">
    <div className="d-flex flex-column" style={{ height: '100px' }}>
      <img
        src={Homeimage}
        alt="Homeimage"
        className="home"
        style={{ marginBottom: '0', alignSelf: 'flex-end', marginRight: '10px' }}
      />
      <img src={Zeducimage} alt="Logo" className="logo" />
    </div>

    <div className="inscription">
      <form onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>MAIL</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>PASSWORD</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>CONFIRM PASSWORD</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <label>TELEPHONE</label>
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <button className="btninscription" type="submit">
          SIGN-UP
        </button>
      </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  </header>
);
};
  export default InscriptionHeader;