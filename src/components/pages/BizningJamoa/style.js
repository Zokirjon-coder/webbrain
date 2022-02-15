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