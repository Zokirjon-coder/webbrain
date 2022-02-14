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
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
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
padding: 25px;

.status{
    color: var(--blue);
    margin-bottom: 5px;
    margin-top: -5px;
}

.text{
    font-family: var(--inter);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin: 8px 0;
    text-align: center;
    color: var(--text-color);
    
}

p{
    font-family: var(--inter);
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 34px;
    color: var(--text-olor);
    margin: 8px 0;
}

.socila{
margin-top: 30px;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
}

`;