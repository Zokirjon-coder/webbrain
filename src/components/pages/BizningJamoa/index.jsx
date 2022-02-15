import React from "react";
import { LANDING } from "./style";
import { dataMember } from "../../../utils/dataMember";

const Youtube = () => {
  return (
    <>
      <LANDING>
        <LANDING.HEADING>
          <span>WebBrain</span> akademiyasida sizga nazariy va amaliy jihatdan <span>katta tajribali</span> mentorlar dars beradi
        </LANDING.HEADING>
      </LANDING>
     {
       dataMember.map(member=><p key={member.id}>{member.name}</p>)
     }
    </>
  );
};

export default Youtube;
