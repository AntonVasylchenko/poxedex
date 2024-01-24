import React from "react";
import { HeaderWrapper, LogoElement, IconElement, Overlay } from "./styled";

import IconFilter from "../../assets/icon-filter.svg";
import IconMenu from "../../assets/icon-menu.svg";
import IconBack from "../../assets/icon-back.svg";

type headerProps = {
  title: string;
};

const Header: React.FC<headerProps> = ({ title = "Pokedex" }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const bodyRef = React.useRef<HTMLElement>(document.body);
  React.useEffect(() => {
    bodyRef.current.classList.toggle("disabled-scroll", open);
  }, [open]);

  const handlerOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <HeaderWrapper>
      <IconElement>
        <img src={IconFilter} alt="Icon filter" loading="lazy" />
      </IconElement>
      <LogoElement>{title}</LogoElement>
      <IconElement>
        <img
          onClick={handlerOpen}
          src={IconMenu}
          alt="Icon meny"
          loading="lazy"
        />
      </IconElement>

      <Overlay $open={open}>
        <div className="header-overlay__line"></div>
        <div className="header-overlay__content">
          <div className="header-overlay__header">
            <img onClick={handlerOpen} src={IconBack} alt="Icon back" loading="lazy" />
            <h2>{title}</h2>
          </div>
        </div>
      </Overlay>
    </HeaderWrapper>
  );
};

export default Header;
