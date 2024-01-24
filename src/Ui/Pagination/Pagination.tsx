import React from "react";

type propPagination = {
  next: string | null;
  prev: string | null;
  currentPage: number;
  maxPage: number;
};

const Pagination: React.FC<propPagination> = ({
  next,
  prev,
  currentPage,
  maxPage,
}) => {
  return (
    <div>
      <button className={`${prev || "disabled"}`} data-url={prev}> Prev </button>
      <div>
        {currentPage}/{maxPage}
      </div>
      <button className={`${next || "disabled"}`} data-url={next}> Next </button>

    </div>
  );
};

export default Pagination;
