import React from "react";
import { LANDING, Students } from "./style";
import IMG from "../../../assets/images/Asosiy_landing.png";
import { dataStudents } from "../../../utils/dataStudents";

const Result = () => {
  console.log(dataStudents);
  const Reapeet = (num) =>{
    let imgs = []
    for(let i=0; i<num; i++) imgs.push(<img src={IMG} />);
    return imgs
  }
  return (
    <>
      <LANDING>
        <LANDING.HEADING>
          <span>WebBrain</span> akademiyasi o’z faoliyati davomida{" "}
          <span>200 dan ortiq</span> dasturlash sohasi vakillarini tayyorlagan.
        </LANDING.HEADING>
      </LANDING>
      <Students>
        {
          dataStudents.then(data=>data).map((user)=><p>{user.name}</p>)
        }
      </Students>
    </>
  );
};

export default Result;
