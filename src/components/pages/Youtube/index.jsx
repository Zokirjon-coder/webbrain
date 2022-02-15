import React from "react";
import { LANDING } from "./style";
import { KURSLAR, FLEX } from "../Asosiy/style";
import CardKurs from "../Asosiy/CardKurs";
import { dataKurs } from "../../../utils/dataKurs";

const Youtube = () => {
  return (
    <>
      <LANDING>
        <LANDING.HEADING>
          <span>WebBrain</span> akademiyasi tomonidan sizlar uchun 
          <span> bepul darsliklar</span>
        </LANDING.HEADING>
      </LANDING>
      <KURSLAR>
        <FLEX
          style={{
            marginTop: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "50px",
          }}
        >
          {dataKurs.map((card) => (
            <CardKurs key={card.id} info={card} />
          ))}
        </FLEX>
      </KURSLAR>
    </>
  );
};

export default Youtube;
