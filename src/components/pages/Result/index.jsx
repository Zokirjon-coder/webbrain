import React from "react";
import { LANDING, Students } from "./style";
import IMG from "../../../assets/images/Asosiy_landing.png";
import CardMember from'./CardMember'

const Result = () => {
  const [usersData, setUsersData] = React.useState([]);
 
  const getUsers = async () => {
    await fetch("https://randomuser.me/api/?results=12")
      .then((data) => data.json())
      .then((result) => {
        let text =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices cras rutrum eu lacus. Amet, eros, neque porta sapien dignissim ut nisi ultricies.";
        let final = [];
        let i = 0;
        result.results.forEach((user) => {
          final[i] = {
            id: i,
            name: user.name.first + " " + user.name.last,
            img: user.picture.medium,
            status: (i % 2 === 0 ? "Frontend" : "Backend") + " dasturchi",
            text: text,
          }; i++
        });
        setUsersData(final);
      });
  };
  React.useEffect(() => {
    getUsers();
  }, []);
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
            usersData.map((user) => <div  key={user.id} className='student'><CardMember info={user} /></div>)
        }
      </Students>
    </>
  );
};

export default React.memo(Result);
