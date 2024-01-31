import React from "react";
import { ToggleSwitcher } from "./styled";
import { useBoolen } from "../../hook";
import { AppContext } from "../../provides/contexts";
AppContext;

const Toggle: React.FC = () => {
  const { status, handlerStatus } = useBoolen(false);
  const { dispatch } = React.useContext(AppContext);

  const handlerTheme = () => {
    handlerStatus();
    dispatch({
      type: "setTheme",
      payload: status ? "light" : "dark",
    });
  };

  return (
    <>
      <ToggleSwitcher
        onClick={handlerTheme}
        className={`${status ? "switch-on" : ""}`}
      ></ToggleSwitcher>
    </>
  );
};

export default Toggle;
