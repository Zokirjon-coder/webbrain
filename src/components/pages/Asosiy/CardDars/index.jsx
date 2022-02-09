import React from 'react';
import {CARD} from './style'

const CardDars =  ({ info }) => {
    const { img, text, title } = info;
    return <CARD>
      <CARD.BODY>
        <img src={img} alt="" />
        <p>{title}</p>
        <span>{text}</span>
        <button>Batafsil</button>
      </CARD.BODY>
    </CARD>;
};

export default CardDars;
