import React from 'react';
import "./Panier.css"

export default function Panier({article, revendre}) {
  return (
    <div id='panier'>
      <div className="bg-dark w-50 rounded-lg text-light d-flex p-2 m-1 align-items-center justify-content-around">
        <h4 className="m-2">{article.nom}</h4>
        <p className="m-2"><span className="font-weight-bold">Prix :</span> {article.prix}€</p>
        <button onClick={revendre} className="btn btn-outline-danger m-2">Rendre</button>
      </div>
    </div>
  );
}
