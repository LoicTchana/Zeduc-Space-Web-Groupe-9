import React, { useState } from 'react';
import './inscriptionheader.css';
import Zeducimage from '../assets/Zeduc.jpg'; 
import Homeimage from '../assets/Icon.png';
import axios from 'axios';

const InscriptionHeader = () => {
    const [formData, setFormData] = useState({
        nom_utilisateur: '',
        email: '',
        mot_de_passe: '',
        mot_de_passe_confirme: '',
        num_tel: '',
        code_parrainage: '',
    });
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('/utilisateurs', formData);
            setSuccess('Inscription réussie!');
            // Reset form if necessary
            setFormData({
                nom_utilisateur: '',
                email: '',
                mot_de_passe: '',
                mot_de_passe_confirme: '',
                num_tel: '',
                code_parrainage: '',
            });
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Une erreur est survenue.');
            } else {
                setError('Erreur de connexion au serveur.');
            }
        }
    };

    return (
        <header className="inscription-header">
            <div className="d-flex flex-column" style={{ height: '100px' }}>
                <img src={Homeimage} alt='Homeimage' className='home' style={{ marginBottom: '0', alignSelf: 'flex-end', marginRight: '10px' }} />
                <img src={Zeducimage} alt="Logo" className="logo" />
            </div>

            <div className='inscription'> {/*definit les labels et input pour l'inscription */}
                <form onSubmit={handleSubmit}>
                    <label>USERNAME</label>
                    <input type='text' name='nom_utilisateur' value={formData.nom_utilisateur} onChange={handleChange} required />
                    
                    <label>Mail</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                    
                    <label>PASSWORD</label>
                    <input type='password' name='mot_de_passe' value={formData.mot_de_passe} onChange={handleChange} required />
                    
                    <label>CONFIRMED PASSWORD</label>
                    <input type='password' name='mot_de_passe_confirme' value={formData.mot_de_passe_confirme} onChange={handleChange} required />
                    
                    <label>TELEPHONE</label>
                    <input type='text' name='num_tel' value={formData.num_tel} onChange={handleChange} required />
                    
                    <label>CODE PARRAINAGE (facultatif)</label>
                    <input type='text' name='code_parrainage' value={formData.code_parrainage} onChange={handleChange} />
                    
                    <button type='submit' className='btninscription'>Inscription</button>
                </form>

                {error && <div className='error'>{error}</div>}
                {success && <div className='success'>{success}</div>}
            </div>
        </header>
    );
};

export default InscriptionHeader;
