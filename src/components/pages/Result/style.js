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
  padding: 100px 0;
  display: grid;
  grid-gap: 0px 15px;

  @media screen and (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
    .student:nth-child(2n),
    .student:nth-child(2n) {
      margin-top: -55px;
    }
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
    .student:nth-child(n) {
      margin: 0;
    }
    .student:nth-child(3n+2) {
      margin-top: -55px;
    }
  }
  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    .student:nth-child(n) {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;
