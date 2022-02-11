import styled, { createGlobalStyle } from "styled-components";

export const CONTAINER = styled.div`
  padding: 80px 90px 0;
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
  --text-color: ${({theme})=>theme.fontColor};
  --larg-fz: 79px;
  --medium-fz: 44px;
  --normal-fz: 16px;
  --bgColor: ${({theme})=>theme.bgColor};
}
`;
