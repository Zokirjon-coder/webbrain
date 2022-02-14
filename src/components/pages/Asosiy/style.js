import styled, { keyframes } from "styled-components";

export const FLEX = styled.div`
  display: flex;
`;

export const LANDING = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;

LANDING.HEADING = styled.h1`
  font-family: var(--fira);
  font-weight: 500;
  font-size: 4.3vw;
  letter-spacing: -0.08em;
  span {
    color: var(--blue);
  }
`;

export const SECHEADING = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-family: var(--inter);
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 28px;
    cursor: pointer;
    color: var(--blue);
  }
`;

LANDING.BTNS = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 15px;
  button {
    width: 30%;
  }
`;
LANDING.IMAGE = styled.div`
  flex: 1;
  height: calc(100vh - 90px);
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  position: relative;
  align-items: center;
  img {
    width: calc(100% / 3 - 15px);
    border-radius: 30px;
    filter: drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.15));
  }
  img:nth-child(2) {
    position: relative;
    top: clamp(70px, 5vw, 125px);
  }
`;

export const STATISTIKA = styled.div`
margin-top: 70px;
  h1 {
    font-family: var(--fira);
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.06em;
    color: var(--text-color);
  }
`;

export const BIZHAQIMIZDA = styled.div`
  margin-top: 50px;
  h1 {
    font-family: var(--fira);
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.06em;
    color: var(--text-color);
  }

  .left {
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-top: 35px;
    position: relative;
    flex-wrap: nowrap;
    img {
      width: calc(100% / 2 - 15px);
      background: #c4c4c4;
      border-radius: 30px;
      filter: drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.25));

      &:nth-child(1) {
        position: relative;
        margin-right: 30px;
        top: 35px;
      }
    }
  }
  .right {
    flex-basis: 50%;
    padding-left: 60px;
    h1 {
      font-family: var(--inter);
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 34px;
      color: var(--text-color);
    }
    p {
      font-family: var(--inter);
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #514d48;
      margin: 16px 0 0;
    }
  }
`;

export const KURSLAR = styled.div`
  margin-top: 65px;
  h1 {
    font-family: var(--fira);
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.06em;
    color: var(--text-color);
  }
`;

export const BEPULDARSLAR = styled.div`
margin-top: 50px;
  h1 {
    font-family: var(--fira);
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.06em;
    color: var(--text-color);
  }
`;

export const TEAM = styled.div`
margin-top: 50px;
  h1 {
    font-family: var(--fira);
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.06em;
    color: var(--text-color);
  }
`;

export const CERTIFICATE = styled.div`
margin-top: 15px;
  h1 {
    font-family: var(--fira);
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.06em;
    color: var(--text-color);
    margin: 5px 0 25px;
  }
  margin: 50px 0 100px;

  .left {
    width: 50%;
    img {
      width: 100%;
    }
  }

  .right {
    width: 50%;
    padding-left: 150px;
    h1 {
      font-family: var(--inter);
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 34px;
      color: var(--text-color);
    }
    p {
      font-family: var(--inter);
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #514d48;
    }
  }
`;
