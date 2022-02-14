import styled from "styled-components";

export const CARD = styled.div`
  background: var(--bgColor);
  width: calc(100% / 3 - 30px);

  @media screen and (max-width: 1250px) {
    width: calc(50% - 15px);
  }
  @media screen and (max-width: 820px) {
    width: calc(100%);
  }
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.5);
  }
`;

CARD.BODY = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;

  span {
    font-family: var(--fira);
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    margin-top: 20px;
    line-height: 52px;
    letter-spacing: -0.06em;
    color: var(--text-color);
  }

  p {
    font-family: var(--inter);
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 34px;
    color: var(--text-color);
  }
`;
