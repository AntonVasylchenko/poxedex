import React from "react";
import { useBoolen, usePagination } from "../../hook";
import { getResponse } from "../../Api/api";
import { setLocalStorage, sortItems } from "../../utils/utils";
import { PageWidth, Preloader} from "../../ui";
import { Pagination, Search, TinyCards } from "../../components";
import { Item } from "../../type/index";
import { Outlet } from "react-router-dom";


const Pokemon: React.FC = () => {
  // Custom Hook
  const { status, handlerStatus } = useBoolen(false);
  const { pagination, handlerPagination } = usePagination();
  // React Hook
  const [items, setItems] = React.useState<Item[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const getData = async (offset: string, limit: string): Promise<void> => {
    const response = await getResponse(offset, limit);

    setItems([...response.items]);

    handlerPagination({
      ...pagination,
      next: response.nextPage,
      prev: response.prevPage,
      maxPage: response.pages,
    });
    if (response.items.length !== 0) {
      handlerStatus();
    }
  };

  React.useEffect(() => {
    setLocalStorage("offset", pagination.offset);
    setLocalStorage("limit", pagination.limit);
    setLocalStorage("currentPage", pagination.currentPage);

    getData(pagination.offset, pagination.limit);
  }, [pagination.offset, pagination.limit, pagination.currentPage]);

  const handlerChange = (query: string): void => {
    setSearch(query);
  };

  const handlerCurrentPage = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      if (event.target) {
        const button = event.target as HTMLButtonElement;
        const name = button.name as "prev" | "next";
        const fakeUrl: string | null = button.getAttribute("data-url");

        if (typeof fakeUrl === "string") {
          const { searchParams } = new URL(fakeUrl);
          const offset: string = searchParams.get("offset") || "0";
          const limit: string = searchParams.get("limit") || "9";

          handlerPagination({
            ...pagination,
            currentPage:
              name === "next"
                ? pagination.currentPage + 1
                : pagination.currentPage - 1,
            offset: offset,
            limit: limit,
          });
          handlerStatus();
        }
      }
    },
    [handlerPagination, handlerStatus]
  );

  return (
    <>
      {status === false ? (
        <Preloader />
      ) : (
        <>
          <Search handlerChange={handlerChange} />
          <PageWidth>
            {sortItems(items, search).length !== 0 ? (
              <TinyCards loading={status} items={sortItems(items, search)} />
            ) : (
              <h2 style={{ textAlign: "center" }}>
                We haven't caught any Pokémon with this name yet
              </h2>
            )}
            {search.length === 0 && (
              <Pagination
                {...pagination}
                handlerCurrentPage={handlerCurrentPage}
              />
            )}
          </PageWidth>
          <Outlet/>

        </>
      )}
    </>
  );
};

export default Pokemon;
