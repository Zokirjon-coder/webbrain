import styled, { createGlobalStyle } from "styled-components";

export const CONTAINER = styled.div`
  padding: 80px 90px 0;
  @media screen and (max-width: 375px) {
  padding: 80px 28px 0;
  }
`;

export const darkMode = {
  bgColor: "#1B1A18",
  fontColor: "#F5FAFF",
};

export const lightMode = {
  bgColor: "#F5FAFF",
  fontColor: "#1B1A18",
};

export const GlobalStyle = createGlobalStyle`
:root{
  --fira: 'Fira Code', monospace;
  --inter: 'Inter', sans-serif;
  --blue: #0076F5;
  --text-color: ${({ theme }) => theme.fontColor};
  --larg-fz: 79px;
  --medium-fz: 44px;
  --normal-fz: 25px;
  --smaller-fz: 19px;
  --small-fz: 16px;
  --bgColor: ${({ theme }) => theme.bgColor};
}

@media screen and (max-width: 375px) {
  :root{
    --medium-fz: 33px;
    --normal-fz: 19px;
    --smaller-fz: 16px;
    --small-fz: 14px;
  }
}

::-webkit-scrollbar{
  width: 10px;
  border-radius: 10px;
  :hover{
  background: #0076F550;
  }
}

::-webkit-scrollbar-thumb{
  background-color: var(--blue);
  border-radius: 8px;
  margin: 0 1px;
}
`;
