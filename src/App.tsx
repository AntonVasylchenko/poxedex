import React from "react";
import { getResponse } from "./Api/api";
import { PageWidth, Preloader } from "./ui";
import { TinyCards, Header, Search, Pagination } from "./components";
import { Item } from "./type/index";
import { setLocalStorage, sortItems } from "./utils/utils";
import { GlobalStyle } from "./styled";
import { AppContext } from "./provides/contexts";
import { useBoolen, usePagination } from "./hook";

const App: React.FC = () => {
  // Custom Hook
  const { status, handlerStatus } = useBoolen(false);
  const { pagination, handlerPagination } = usePagination();
  // React Hook
  const [items, setItems] = React.useState<Item[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const { state } = React.useContext(AppContext);

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
      <GlobalStyle themeName={state.theme} />
      {status === false ? (
        <Preloader />
      ) : (
        <>
          <Header title="Pokedex" />
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
        </>
      )}
    </>
  );
};

export default App;
