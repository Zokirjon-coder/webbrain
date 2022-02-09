import styled from "styled-components";

export const HEADER = styled.div`
width: 100%;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 100;
height: 80px;
background: #F5FAFF;
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

HEADER.COMMENT = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
user-select: none;
gap: 8px;

label{
    transition: .2s;
    cursor: pointer;
    color: ${({position}) => position ? '#F77F00' : 'var(--text-color)'};
    white-space: nowrap;
}

input{
    all: unset;
    cursor: pointer;
    appearance: none;
    background: ${({position}) => position ? '#FFE1C2' : '#CFCCC9'};
    width: 25px;
    height: 15px;
    border-radius: 15px;
    transition: .2s;
    position: relative;
}

input::before{
    content: '';
    position: absolute;
    top: 0;
    width: 15px;
    height: 15px;
    left: ${({position}) => position ? 'calc(100% - 15px)' : 0 };
    background: ${({position}) => position ? '#F77F00' : '#b7b3ae' };
    border-radius: 15px;
    transition: .2s;
}
`