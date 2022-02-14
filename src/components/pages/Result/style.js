import styled from "styled-components";
export const LANDING = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

LANDING.HEADING = styled.h1`
  font-family: var(--fira);
  font-weight: 500;
  font-size: 4.3vw;
  letter-spacing: -0.08em;
  text-align: center;
  span {
    color: var(--blue);
  }
`;

export const Students = styled.div`
  > * {
    width: 100%;
    height: 250px;
  }
  @media screen and (min-width: 1050px) {
    columns: 4;
    img:nth-child(4),
    img:nth-child(10) {
      margin-top: 55px;
    }
  }
  @media screen and (max-width: 1050px) {
    columns: 3;
    img {
      margin: 0;
    }
    img:nth-child(5) {
      margin-top: 55px;
    }
  }
  @media screen and (max-width: 800px) {
    columns: 2;
    img:nth-child(5) {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 570px) {
    columns: 1;
    img {
      margin: 0;
    }
  }
`;
