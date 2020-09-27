import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css'

export const CardList = props => (
 <div className='card-list'>
     {props.ballers.map(ballers => ( 
        <Card key={ballers.name} ballers={ballers}/> 
        ))}
 </div>
);