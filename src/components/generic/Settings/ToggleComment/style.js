import styled from "styled-components"

export const COMMENTTGL = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: space-between;
user-select: none;
gap: 8px;
margin: 16px 0;

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