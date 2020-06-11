import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';


import './styles.css';
import logoImg from '../../assets/logo.png'

export default function Register() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[latitude, setLatitude] = useState('');
    const[longitude, setLongitude] = useState('');
    const[msg, setMsg] = useState('');

    const history = useHistory();

   async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            msg
        };

    try {
       const response = await api.post('users', data);

       alert(`Seu ID de acesso: ${response.data}`);
       history.push('/');

    } catch (err) {
        alert("Erro no cadastro, tente novamente!");
      }
    }

    return (
   <div className="register-container"> 
   <div className="content">
       <section> 
        <img src={logoImg} width="450" height="144" alt="Be the hero"/>
        <h1>Cadastrar pedido de doação</h1>
        <p>Faça o cadastro do seu pedido de ajuda e aguarde a possibilidade de alguem entrar em contato.</p>
        <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#00C5E5"/>
                Retornar 
            </Link>
       </section>
       <form onSubmit={handleRegister}>
        <input placeholder="Nome (Pessoa ou ONG)"
        value={name}
        onChange={e => setName(e.target.value)} 
        />
        <input type="email" placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />
        <input placeholder="Whatsapp"
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)} 
        />
       
       <input placeholder="Latitude"
          value={latitude}
          onChange={e => setLatitude(e.target.value)} 
        />
   
       <input placeholder="Longitude"
          value={longitude}
          onChange={e => setLongitude(e.target.value)} 
        />

<input placeholder="Do que precisa? Alimento? Remédio? Máscaras?"
          value={msg}
          onChange={e => setMsg(e.target.value)} 
        />




       <button className="button"> Cadastrar </button>
      
       </form>
   </div>
   </div>
    );
}