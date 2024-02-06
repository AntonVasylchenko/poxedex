import React from "react";
import IconBack from "../../assets/icon-back.svg";
import IconBackDark from "../../assets/icon-back-dark.svg";

import { Toggle } from "../../ui";
import { getLocalStorage } from "../../utils/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper, LogoElement, IconElement } from "./styled";

type headerProps = {
  title: string;
};

const Header: React.FC<headerProps> = ({ title = "Pokedex" }) => {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const isLightTheme =
    getLocalStorage("theme", "light") === "light" ? false : true;

  return (
    <HeaderWrapper>
      <IconElement>
        {pathname === "/poxedex" || (
          <img
            onClick={() => navigate(-1)}
            src={isLightTheme ? IconBackDark : IconBack}
            alt="Icon filter"
            loading="lazy"
          />
        )}
      </IconElement>
      <LogoElement>
        {pathname === "/poxedex" ? 
        title : (
          <Link to="/poxedex">{title}</Link>
        )}
      </LogoElement>
      <Toggle />
    </HeaderWrapper>
  );
};

export default Header;
