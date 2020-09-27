import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="ballers" 
        src= {`https://robohash.org/${props.ballers.id}?set=set3&size=180x180`} 
        />
    <h1> {props.ballers.name} </h1>
    </div>

)