import styled, { keyframes } from "styled-components";

const dash = keyframes`
  from { stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const COMMENT = styled.div`
position: relative;
svg{
    opacity: ${({show})=>show?'1':'0'};
    height: ${({show})=>show?'auto':'0'};
    stroke-dasharray: 2000;
    stroke-dashoffset: 400;
    animation: ${({show})=>show? dash : null} 2s linear forwards;
    fill: var(--text-color);
}
`

COMMENT.BODY = styled.div`
width: 150px;
transition: ${({show})=>show?'1s .5s':'0'};
opacity: ${({show})=>show?'1':'0'};
height: ${({show})=>show?'auto':'0'};
overflow: hidden;
`