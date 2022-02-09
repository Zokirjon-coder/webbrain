import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

export const Container = styled.div`
  position: fixed;
  top: 200px;
  left: 0;
`;

Container.Toggle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 56px;
  border-radius: 0 28px 28px 0;
  background: var(--blue);
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 16px;
  transition: transform 0.3s 0.1s ease-in-out;
  transform: translateX(${({ hide }) => (hide ? "-100%" : "0")});
  box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
  cursor: pointer;

  svg {
    animation: 2s ${rotate} linear infinite;
  }
`;

export const DrowerSettings = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 148px;
  transition: transform 0.3s 0.4s ease-in-out;
  transform: translateX(${({ show }) => (show ? "0" : "-100%")});
  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 0px 10px 10px 0px;
`;

DrowerSettings.Topbar = styled.div`
  width: 100%;
  height: 56px;
  background: #f0f7ff;
  border-radius: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  padding-right: 8px;
  border-bottom: 1px solid #8fc5ff;
  p {
    font-weight: 500;
    font-size: 14px;
    color: var(--blue);
  }
  span {
    cursor: pointer;
    &:hover{
        svg{
            transition: .3s;
            transform: scale(.75);
        }
    }
  }
`;

DrowerSettings.Body = styled.div`
  width: 100%;
  padding: 0 8px 0 16px;
`;
