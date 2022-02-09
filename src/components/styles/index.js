import styled from "styled-components";

export const FLEX = styled.div`
display: flex;
width: 100%;
align-items: ${({align}) => align};
justify-content: ${({justify}) => justify};
`

export const BUTTON_OUTLINE = styled.button`
all: unset;
padding: 12px 30px;
text-align: center;
color: var(--blue);
background: transparent;
border: 1px solid var(--blue);
border-radius: 10px;
cursor: pointer;
width: ${({width}) => width};
:active{
    transform: scale(.99);
}
`

export const BUTTON_SOLID = styled.button`
all: unset;
padding: 12px 36px;
text-align: center;
color: white;
background: var(--blue);
border-radius: 10px;
width: ${({width}) => width};
cursor: pointer;
box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
:active{
    transform: scale(.99);
}
`