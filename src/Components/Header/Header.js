import React from 'react';
import "./Header.css"

export default function Header(props) {
  return (
    <div className='cadreHeader mb-5'>
        <div className='logoEtInput'>
        <div className='geofBureau'>
            <span>GeofBureau</span>
            <span>Tout le bureau <b>En mieux</b></span>
        </div>
        <input type="text" placeholder='rechercher' />
        </div>
        <div className='liste'>
            <ul className='lesLi'>
                <li className='dansLi'><i class="fas fa-list"></i><a href="#">Commandes Express</a></li>
                <li className='dansLi'><i class="far fa-user-circle"></i><a href="#">Mon compte</a></li>
                <li onClick={props.toggle} className={props.panier != 0 ? 'dansLi active' : 'dansLi'}><i class="fas fa-shopping-cart"></i><a href="#panier"> {props.panier === 0 ? "Panier vide" : "Voir panier"}</a></li>
            </ul>
        </div>
    </div>
  );
}

