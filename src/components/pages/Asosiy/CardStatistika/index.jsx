import React from 'react';
import { CARD } from './style';

const CardStatistika = ({info}) => {
const {img, number, title} = info;
  return <CARD>
      <CARD.BODY>
          <img src={img} alt="" />
          <span>{number} ta</span>
          <p>{title}</p>
      </CARD.BODY>
  </CARD>;
};

export default CardStatistika;
