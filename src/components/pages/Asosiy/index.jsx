import React from "react";
import Comment from "../../generic/Comment";
import {
  SECHEADING,
  BIZHAQIMIZDA,
  FLEX,
  KURSLAR,
  LANDING,
  STATISTIKA,
  BEPULDARSLAR,
  TEAM,
  CERTIFICATE,
} from "./style";
import landImg from "../../../assets/images/Asosiy_landing.png";
import landImg1 from "../../../assets/images/Asosiy_landing1.png";
import landImg2 from "../../../assets/images/Asosiy_landing2.png";
import { BUTTON_OUTLINE, BUTTON_SOLID } from "../../styles";
import { useNavigate } from "react-router";
import CardStatistika from "./CardStatistika";
import { dataStatusCard } from "../../../utils/dataStatusCard";
import { dataKurs } from "../../../utils/dataKurs";
import bizhaqimizda from "../../../assets/images/biz_haqimizda.png";
import bizhaqimizda_left from "../../../assets/images/biz_haqimizda_left.png";
import CardKurs from "./CardKurs";
import CardDars from "./CardDars";
import CardMember from "./CardMember";
import { dataFreeCourse } from "../../../utils/dataFreeCourse";
import { dataMember } from "../../../utils/dataMember";
import Certificate from "../../../assets/images/certificate.png";

const Asosiy = () => {
  const navigate = useNavigate();

  return (
    <>
      <FLEX>
        <LANDING>
          <LANDING.HEADING>
            <span>Eng kuchli</span> va zamonaviy o’qitish uslubida ta’lim
            beruvchi <span>markaz</span>
          </LANDING.HEADING>
          <LANDING.BTNS>
            <BUTTON_SOLID onClick={() => navigate("/kurslarimiz")}>
              Kurslarimiz
            </BUTTON_SOLID>
            <BUTTON_OUTLINE onClick={() => navigate("/")}>Aloqa</BUTTON_OUTLINE>
          </LANDING.BTNS>
        </LANDING>
        <LANDING.IMAGE>
          <img src={landImg1} alt="" />
          <img src={landImg} alt="" />
          <img src={landImg2} alt="" />
        </LANDING.IMAGE>
      </FLEX>
      <STATISTIKA>
        <h1>Statistika</h1>
        <FLEX
          className="centered"
          style={{
            marginTop: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: '15px',
          }}
        >
          {dataStatusCard.map((card) => (
            <CardStatistika key={card.id} info={card} />
          ))}
        </FLEX>
      </STATISTIKA>
      <BIZHAQIMIZDA>
        <h1>Biz haqimizda</h1>
        <FLEX
          style={{
            marginTop: "24px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="left">
            <img src={bizhaqimizda_left} alt="" />
            <img src={bizhaqimizda} alt="" />
          </div>
          <div className="right">
            <h1>Biz haqimizda faqat bizdan eshiting </h1>
            <p>
              Eget nam quisque lobortis ipsum sollicitudin. Ultricies morbi
              platea ac vel duis sed pretium. Vel ac magnis et lobortis
              adipiscing tempor, tincidunt urna. Morbi aenean natoque bibendum
              ut volutpat.
            </p>
            <p>
              Varius cras facilisi eleifend consequat libero sit nisl. Purus
              arcu viverra facilisi in. Sit consequat dolor lectus velit, neque,
              enim, fames laoreet.
            </p>
          </div>
        </FLEX>
      </BIZHAQIMIZDA>
      <KURSLAR>
        <SECHEADING>
          <h1>Kurslar</h1>
          <a onClick={() => navigate("/kurslarimiz")}>Barcha kurslar {'>'} </a>
        </SECHEADING>

        <FLEX
          style={{
            marginTop: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {dataKurs.map((card) => (
            <CardKurs key={card.id} info={card} />
          ))}
        </FLEX>
      </KURSLAR>
      <BEPULDARSLAR>
        <SECHEADING>
          <h1>Bepul darslar</h1>
          <a onClick={() => navigate("/youtube")}>Barcha kurslar {'>'} </a>
        </SECHEADING>
        <FLEX
          style={{
            marginTop: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {dataFreeCourse.map((course) => (
            <CardDars key={course.id} info={course} />
          ))}
        </FLEX>
      </BEPULDARSLAR>
      <TEAM>
        <SECHEADING>
          <h1>Bizning jamoa</h1>
          <a onClick={() => navigate("/bizningjamoa")}>Barcha mentorlar {'>'} </a>
        </SECHEADING>
        <FLEX
          style={{
            marginTop: "24px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {dataMember.map((member) => (
            <CardMember key={member.id} info={member} />
          ))}
        </FLEX>
      </TEAM>
      <CERTIFICATE>
        <h1>Sertifikat</h1>
        <FLEX
          style={{
            alignItems: "center",
          }}
        >
          <div className="left">
            <img src={Certificate} alt="" />
          </div>
          <div className="right">
            <h1>+200 o’quvchilar bizga ishonishgan</h1>
            <p>
              Kursni tamomlagan talabalarning o’zlashtirish ko’rsatkichi
              e’tiborga olingan holda sertifikatlar beriladi.
            </p>
          </div>
        </FLEX>
      </CERTIFICATE>
    </>
  );
};

export default Asosiy;
