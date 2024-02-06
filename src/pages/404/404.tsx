import React from "react";
import { Link } from "react-router-dom";
import { Page404Wrapper, Page404Title, Page404Image } from "./styled";
import image404 from "../../assets/404.png";

const Page404: React.FC = () => {
  return (
    <Page404Wrapper>
      <Page404Title>404 page</Page404Title>
      <Page404Image>
        <img src={image404} alt="404" loading="lazy" />
      </Page404Image>
      <Link to="/poxedex">Go home </Link>
    </Page404Wrapper>
  );
};

export default Page404;
