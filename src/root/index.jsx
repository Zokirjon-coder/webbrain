import React, {useContext} from "react";
import { CONTAINER, darkMode, GlobalStyle, lightMode } from "./style";
import Header from "../components/generic/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { dataMenu } from "../utils/dataMenu";
import Footer from "../components/Footer";
import Settings from "../components/generic/Settings";
import { ThemeProvider } from "styled-components";
import { CommentApi } from "../context/CommentContext";

const Root = () => {
  const [state]=useContext(CommentApi);
  return (
    <ThemeProvider theme={state.darkMode?darkMode:lightMode}>
      <GlobalStyle />
      <Router>
        <CONTAINER>
          <Header />
          <Settings />
          <Routes>
            {dataMenu.map(({ pathname, id, Element }) => (
              <Route
                key={id}
                path={pathname}
                element={<Element title={pathname} />}
              />
            ))}
            <Route path="/" element={<Navigate to="/asosiy" />} />
            <Route path="*" element={<h1>page not found</h1>} />
          </Routes>
        </CONTAINER>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default Root;
