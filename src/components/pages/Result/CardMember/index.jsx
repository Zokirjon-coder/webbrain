import React from 'react';
import { CARD } from './style';
import face from '../../../../assets/icons/facebook.png'
import insta from '../../../../assets/icons/insta.png'
import youtube from '../../../../assets/icons/youtube.png'
import github from '../../../../assets/icons/github.png'

const CardKurs = ({ info }) => {
  const { img, text, name, status } = info;
  return <CARD>
    <CARD.BODY>
      <img src={img} alt="" />
      <p>{name}</p>
      <span className='status'>{status}</span>
      <span className='text'>{text}</span>
      <div className='socila'>
        <img src={ face } alt="" />
        <img src={ insta } alt="" />
        <img src={ youtube } alt="" />
        <img src={ github } alt="" />
      </div>
    </CARD.BODY>
  </CARD>;
};

export default CardKurs;
