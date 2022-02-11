import styled from "styled-components";

export const HEADER = styled.div`
width: 100%;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 100;
height: 80px;
background: var(--bgColor);
display: flex;
align-items: center;
justify-content: center;
padding: 0 100px;
box-shadow: 0 0 15px rgba(0,0,0,0.5);
`

HEADER.LOGO = styled.div`
font-size: 33px;
color: var(--text-color);
letter-spacing: -2px;
font-family: var(--fira);
width: 300px;
cursor: pointer;
span{
    color: var(--blue);
}
`

HEADER.MENU = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`

HEADER.LOGIN = styled.div`
width: 300px;
`

