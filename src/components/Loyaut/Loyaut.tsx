import React from "react";
import Header from "../Header/Header";
import { GlobalStyle } from "./styled.ts";

import { Outlet, useParams } from "react-router-dom";
import { AppContext } from "../../provides/contexts";

const Loyaut: React.FC = () => {
  const { state } = React.useContext(AppContext);
  const { name } = useParams();

  return (
    <>
      <GlobalStyle themeName={state.theme} />
      <Header title={name ? name : "Pokedex"} />
      <Outlet />
    </>
  );
};

export default Loyaut;
