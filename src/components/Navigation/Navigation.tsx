import React from "react";
import { PageWidth } from "../../ui";
import { NavWrapper, NavList, NavItem, NavName,NavImage } from "./styled";
import { navPaths } from "../../constants";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <PageWidth>
        <NavList>
          {navPaths().map((navItem) => {
            return (
              <NavItem key={navItem.id}>
                <Link to={navItem.path}>
                  <NavName>{navItem.name}</NavName>
                  <NavImage>
                     <img src={navItem.image} alt={navItem.name} loading="lazy" />
                  </NavImage>
                </Link>
              </NavItem>
            );
          })}
        </NavList>
      </PageWidth>
    </NavWrapper>
  );
};

export default Navigation;
