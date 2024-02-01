import React from "react";
import { HeaderWrapper, LogoElement, IconElement } from "./styled";

import IconFilter from "../../assets/icon-filter.svg";
import IconFilterDark from "../../assets/icon-filter-dark.svg";
import IconMenu from "../../assets/icon-menu.svg";
import IconMenuDark from "../../assets/icon-menu-dark.svg";

import { Toggle } from "../../ui";
import { getLocalStorage } from "../../utils/utils";

type headerProps = {
  title: string;
};

const Header: React.FC<headerProps> = ({ title = "Pokedex" }) => {
  const isLightTheme =
    getLocalStorage("theme", "light") === "light" ? false : true;

  return (
    <HeaderWrapper>
      <IconElement>
        <img
          src={isLightTheme ? IconFilterDark : IconFilter}
          alt="Icon filter"
          loading="lazy"
        />
      </IconElement>
      <LogoElement>{title}</LogoElement>
      <Toggle />
      <IconElement>
        <img
          src={isLightTheme ? IconMenuDark : IconMenu}
          alt="Icon meny"
          loading="lazy"
        />
      </IconElement>
    </HeaderWrapper>
  );
};

export default Header;
