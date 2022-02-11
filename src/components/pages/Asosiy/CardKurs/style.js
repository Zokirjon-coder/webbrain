import styled from "styled-components";

export const CARD = styled.div`
    width: 482px;
    height: 436px;
    left: 207px;
    top: 2335px;

background: var(--bgColor);
/* Drop Shadow */

border-radius: 10px;

cursor: pointer;
&:hover{
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
/* padding: 15px; */

span{
    font-family: var(--inter);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin: 8px 0;
    text-align: center;
    color: var(--text-color);
    width: 350px;
}

p{
    font-family: var(--inter);
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 34px;
    color: var(--text-color);
    margin: 8px 0;
}
button{
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
    &:hover{
    box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
    color: white;
    background: #0076F5;
}
}
`;