import React from "react";
import { HeaderWrapper, LogoElement, IconElement} from "./styled";

import IconFilter from "../../assets/icon-filter.svg";
import IconMenu from "../../assets/icon-menu.svg";

type headerProps = {
  title: string;
};

const Header: React.FC<headerProps> = ({ title = "Pokedex" }) => {
  return (
    <HeaderWrapper>
      <IconElement>
        <img src={IconFilter} alt="Icon filter" loading="lazy" />
      </IconElement>
      <LogoElement>{title}</LogoElement>
      <IconElement>
        <img
          src={IconMenu}
          alt="Icon meny"
          loading="lazy"
        />
      </IconElement>
    </HeaderWrapper>
  );
};

export default Header;
