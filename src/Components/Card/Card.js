import React from 'react';
import imgCrayon from "../../images/crayons.png"
import "./Card.css"

export default function Card() {
    return (
        <div className='card'>
            <div className="image">
                <img className='imgCrayon' src={imgCrayon} alt="" />
            </div>
        </div>
    );
}
