import React, {useEffect, useState} from 'react';
import './AbonnementForm.css';
import ChannelsPresentation from '../ChannelsPresentation/ChannelsPresentation';
import { AiOutlineArrowRight } from "react-icons/ai";
import SteepAbonnement from '../SteepAbonnement/SteepAbonnement';

import {
    openKkiapayWidget,
    addKkiapayListener,
    removeKkiapayListener,
  } from "kkiapay";

const AbonnementForm = ({Channels, Services, Id}) => {

    const [validate, setValidate] = useState(true);

    // Définition type abonnement
    const TypeAbonnement = (Id === 1 )? 1 : (Id === 2)? 3 : 6;

    // Définition Prix abonnement
    const price = (TypeAbonnement === 1)? 8000: (TypeAbonnement === 3)? 15000: 46000;
    const Titre = `Votre Abonnement de ${TypeAbonnement} Mois à ${price}`;
    
    function open() {
        openKkiapayWidget({
          amount: price,
          api_key: process.env.REACT_APP_API_KEY,
          sandbox: true,
          email: "randomgail@gmail.com",
          phone: "97000000"
        });
    }

    useEffect(() => {
        addKkiapayListener('success',successHandler);
        return () => {
          removeKkiapayListener('success',successHandler)
        };
    }, []);

    function successHandler(response) {
        setValidate(true);
    }


  return (
    <section className="abonnementForm">
        <SteepAbonnement steep={2} />

        <div className="abonnementFormContent">
            <h2>Vos informations pour votre abonnement {TypeAbonnement} mois</h2>
            <form action="" className='grid'>

                <div className="input identifiant">
                    <label htmlFor="identifiant">Identifiant *</label><br />
                    <input type="text" id='identifiant' placeholder='0123-646-374'/>
                </div>

                <div className="input nom">
                    <label htmlFor="nom">Nom *</label><br />
                    <input type="text" id='nom' placeholder='Votre Nom...'/>
                </div>

                <div className="input prenom">
                        <label htmlFor="prenom">Prénom *</label><br />
                        <input type="text" id='prenom' placeholder='Votre Prénom...'/>
                </div>
                
                <div className="input pays">
                        <label htmlFor="identifiant">Pays *</label><br />
                        <select id="identifiant" defaultChecked='HYFBN'>
                            <option value="">Sélectionner votre pays...</option>
                            <option value="Bénin">Bénin</option>
                            <option value="Togo">Togo</option>
                            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                        </select>
                        <p></p>
                </div>

                <div className="input mail">
                        <label htmlFor="mail">Adresse mail *</label><br />
                        <input type='email' id='mail' placeholder='E mail...'/>
                        <p>Votre email de souscription valide</p>
                </div>

                <div className="input appareil">
                    <label htmlFor="appareil">Type d'appareils *</label><br />
                    <select id="appareil">
                        <option value="Smart Phone">Smart Phone</option>
                        <option value="Ordinateur">Ordinateur</option>
                        <option value="Smart TV">Smart TV</option>
                        <option value="Téléviseur traditionnel">Téléviseur traditionnel</option>
                    </select>
                </div>

                <div className="input formDetail">
                    <label htmlFor="formdetail">Information additionnelle (optionnelle)</label><br />
                    <textarea id="formdetail" cols="20" rows="5" placeholder='Votre Information...'></textarea>
                </div>
            </form>
            
            <p style={{ textAlign: 'center' }}>!! Paiement de {price} Fcfa pour votre abonnement de {TypeAbonnement} mois</p>
            
            <button className='flex' type="submit" onClick={open}> Valider <AiOutlineArrowRight /></button>
        </div>

        <ChannelsPresentation Channels={Channels} Services={Services} Titre={Titre}/>

        { validate && <ValidateSection /> }
    </section>
  )
}

export default AbonnementForm;


const ValidateSection = () => {

    const [section, setSection] = useState(true);

    const handleSubmit = () => {
        // Avis Setup in database
    }

    if(section)
    return(

        <div className="validateSection">
            <div className="overlay" onClick={() => setSection(false)}></div>

            <div className="avis-section">
                <h2>Paiement réussi! <br /> <span>Avec Net Box TV, Voyagez dans le temps et dans l'espace depuis votre confort</span> </h2>
                <p>Nous aimerions avoir votre avis sur notre produit/service :</p>
                <form onSubmit={handleSubmit}>
                    <label>
                    Votre avis : <br />
                    <textarea rows="4" cols="50" required />
                    </label>
                    <button type="submit">Soumettre l'avis</button>
                </form>
            </div>
        </div>
    )
    
}