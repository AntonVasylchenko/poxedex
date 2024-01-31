import React from "react";
import { PaginationType } from "../type/index";
import { getLocalStorage } from "../utils/utils";

type usePaginationType = {
  pagination: PaginationType;
  handlerPagination: (i: PaginationType) => void;
};

export const usePagination = (): usePaginationType => {
  const [pagination, setPagination] = React.useState<PaginationType>({
    next: "",
    prev: "",
    currentPage: Number(getLocalStorage("currentPage", "1")) || 1,
    maxPage: 0,
    offset: getLocalStorage("offset", "0"),
    limit: getLocalStorage("limit", "33"),
  });

  const handlerPagination = (obj: PaginationType): void => {
    setPagination(obj);
  };

  return { pagination, handlerPagination };
};
