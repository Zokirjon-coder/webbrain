import styled from "styled-components";

export const CARD = styled.div`
  width: calc(100% / 3 - 30px);

  @media screen and (max-width: 1250px){
      width: calc(50% - 15px);
  }
  @media screen and (max-width: 820px){
      width: calc(100%);
  }

  background: var(--bgColor);
  border-radius: 10px;
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
    font-family: var(--inter);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin: 8px 0;
    text-align: center;
    color: var(--text-color);
    max-width: 350px;
  }

  p {
    font-family: var(--inter);
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 34px;
    color: var(--text-color);
    margin: 8px 0;
  }
  button {
    /* Blue */
    all: unset;
    margin-top: 8px;
    color: var(--blue);
    box-sizing: border-box;
    width: 195px;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    padding: 12px 36px;
    border: 1px solid var(--blue);
    &:hover {
      box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
      color: white;
      background: #0076f5;
    }
  }
`;
