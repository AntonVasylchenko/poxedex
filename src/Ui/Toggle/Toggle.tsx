import React from "react";
import { useBoolen } from "../../hook";
import { AppContext } from "../../provides/contexts";
import { ToggleSwitcher } from "./styled";
import { setLocalStorage,getLocalStorage } from "../../utils/utils";

import icon from "../../assets/icon-pokeboll.svg"
const Toggle: React.FC = () => {
  const isLightTheme = getLocalStorage("theme","light") === "light" ? false : true;
  const { status, handlerStatus } = useBoolen(isLightTheme);
  const { dispatch } = React.useContext(AppContext);

  const handlerTheme = () => {
    handlerStatus();
    dispatch({
      type: "setTheme",
      payload: status ? "light" : "dark",
    });
    setLocalStorage("theme", status ? "light" : "dark")
  };

  return (
    <>
      <ToggleSwitcher
        onClick={handlerTheme}
        className={`${status ? "switch-on" : ""}`}
      >
        <img src={icon} alt="Pokeboll" />
      </ToggleSwitcher>
    </>
  );
};

export default Toggle;
