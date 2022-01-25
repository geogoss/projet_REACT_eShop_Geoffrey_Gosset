import React from 'react';
import "./Card.css"

export default function Card({ article, money, acheter }) {
    return (
        <div className={`card col-2 mx-auto ${article.unite == 1? `bg-warning`:`${article.unite === 0? "bg-danger": "bg-lignt"}`}`}>
            <img className='imgCrayon' src={article.img} alt={article.nom} />
            <div className="card-header">{article.nom}</div>
            <div className="card-body d-flex flex-column justify-content-center">
                <span className='mb-2'>Prix : {article.prix} <i class="fas fa-euro-sign"></i> </span>
                <span>Stock : {article.unite} unités</span>
            </div>
            <div className="card-footer">
                <button onClick={acheter} className={`btn btn-outline-dark bg-info font-weight-bold ${money < article.prix || article.unite <= 0 ? "d-none" : ""}`}> Acheter </button>
            </div>
        </div>
    );
}
