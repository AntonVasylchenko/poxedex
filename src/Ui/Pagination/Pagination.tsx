import React from "react";
import { PaginationContainer } from "./styled";

type propPagination = {
  next: string | null;
  prev: string | null;
  currentPage: number;
  maxPage: number;
  handlerCurrentPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Pagination: React.FC<propPagination> = ({
  next,
  prev,
  currentPage,
  maxPage,
  handlerCurrentPage,
}) => {
  const changeCurrentPage = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    handlerCurrentPage(e);
  };

  return (
    <PaginationContainer>
      <button
        onClick={changeCurrentPage}
        className={`${prev || "disabled-button"}`}
        name="prev"
        data-url={prev}
      >
        Prev
      </button>
      <div>
        {currentPage}/{maxPage}
      </div>
      <button
        onClick={changeCurrentPage}
        className={`${next || "disabled-button"}`}
        name="next"
        data-url={next}
      >
        Nexts
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
