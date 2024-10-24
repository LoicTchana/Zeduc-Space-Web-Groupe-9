import React, { useState } from 'react';
import './inscriptionheader.css'   // On va ajouter un fichier CSS pour les styles
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Zeducimage from '../assets/Zeduc.jpg';
import Homeimage from '../assets/Icon.png';



const InscriptionHeader = () => {


    function CreateUser() {
        const [formData, setFormData] = useState({
            nom_utilisateur: '',
            email: '',
            num_tel: '',
            mot_de_passe: '',
            code_parrainage: '',
        });
        const navigate = useNavigate();
        const [error, setError] = useState('');

        const handleInputChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await axios.post('/api/utilisateurs', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    },
                });

                console.log('Utilisateur créé avec succès:', response.data);
                navigate('/');  // Redirection vers la page d'accueil après succès
            } catch (error) {
                if (error.response) {
                    // Erreur avec une réponse du serveur
                    setError(error.response.data.message || 'Erreur lors de la création de l\'utilisateur');
                } else {
                    // Autre type d'erreur
                    setError('Erreur lors de la création de l\'utilisateur');
                }
                console.error('Erreur lors de la création de l\'utilisateur:', error);
            }
        };

        return (
            <header className="inscription-header">

                <div className="d-flex flex-column" style={{height: '100px'}}>
                    <img src={Homeimage} alt='Homeimage' className='home'
                         style={{marginBottom: '0', alignSelf: 'flex-end', marginRight: '10px'}}/>
                    <img src={Zeducimage} alt="Logo" className="logo"/>

                </div>

                <div class='inscription'>
                    <h2>Créer un nouveau compte</h2>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>USERNAME</label>
                        <input type='text' name={"Nom d'utilisateur"} value={formData.nom_utilisateur}></input>
                        <label>Mail</label>
                        <input type='email' name={"email"} value={formData.email} onChange={handleInputChange}></input>
                        <label>PASSWORD</label>
                        <input type='text' name={"mot de passe "} value={formData.mot_de_passe}
                               onChange={handleInputChange} required={}></input>
                        <label>TELEPHONE</label>
                        <input type='text' name={"Numero de telephone"} value={formData.num_tel}
                               onChange={handleInputChange} required={}></input>
                        <label>Code de parrainage (optionnel) :</label>
                        <input type="text" name="code_parrainage" value={formData.code_parrainage}
                               onChange={handleInputChange}/>
                        <button className='btninscription' type={"submit"}>Inscription</button>
                    </form>

                </div>

            </header>

        );
    }

   export default CreateUser;
    export default InscriptionHeader;

}
