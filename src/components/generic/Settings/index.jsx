import React, { useState } from "react";
import { Container, DrowerSettings } from "./style";
import { ReactComponent as Setting } from "../../../assets/icons/settings.svg";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";
import ToggleComment from "./ToggleComment";
import ToggleTheem from "./ToggleTheem";

const Settings = () => {
  const [showSett, setShowSett] = useState(false);
  return (
    <Container>
      <Container.Toggle hide={showSett} onClick={() => setShowSett(true)}>
        <Setting />
      </Container.Toggle>
      <DrowerSettings show={showSett}>
        <DrowerSettings.Topbar>
          <p>Funksiyalar</p>
          <span onClick={() => setShowSett(false)}>
            <Close />
          </span>
        </DrowerSettings.Topbar>
        <DrowerSettings.Body>
          <ToggleComment />
          <ToggleTheem />
        </DrowerSettings.Body>
      </DrowerSettings>
    </Container>
  );
};

export default Settings;
