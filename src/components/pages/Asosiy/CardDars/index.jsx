import React from "react";
import { CARD } from "./style";

const CardDars = ({ info }) => {
  const { img, text, title } = info;
  return (
    <CARD>
      <CARD.BODY>
        <div className="imgBox">
          <img src={img} alt="" />
        </div>
        <p>{title}</p>
        <span>{text}</span>
        <button>Batafsil</button>
      </CARD.BODY>
    </CARD>
  );
};

export default CardDars;
