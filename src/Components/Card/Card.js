import React from 'react';
import "./Card.css"

export default function Card(props) {
    return (
        <div className='card col-2 mx-auto'>
                <img className='imgCrayon' src={props.img} alt="" />
                <div className="card-header">{props.produit}</div>
                <div className="card-body d-flex flex-column justify-content-center">
                    <span className='mb-2'>Prix : {props.prix} <i class="fas fa-euro-sign"></i> </span>
                    <span>Stock : {props.unite} unités</span>
                </div>
                <div className="card-footer"><button className='btn btn-success w-50 p-1 my-2'> Acheter</button></div>
        </div>
    );
}
