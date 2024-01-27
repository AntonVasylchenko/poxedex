import React from "react";
import { Wrapper } from "./styled";
import { getResponse } from "./Api/api";
import { PageWidth, Preloader } from "./Ui";
import { TinyCards, Header, Search, Pagination } from "./components";
import { Item } from "./type/index";
import { setLocalStorage, getLocalStorage } from "./utils/utils";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<Item[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const [pagination, setPagination] = React.useState<{
    next: string | null;
    prev: string | null;
    currentPage: number;
    maxPage: number;
    offset: string;
    limit: string;
  }>({
    next: "",
    prev: "",
    currentPage: Number(getLocalStorage("currentPage", "1")) || 1,
    maxPage: 0,
    offset: getLocalStorage("offset", "0"),
    limit: getLocalStorage("limit", "33"),
  });

  const getData = async (offset: string, limit: string): Promise<void> => {
    const response = await getResponse(offset, limit);
    setLoading(false);
    setItems([...response.items]);
    setPagination((prev) => ({
      ...prev,
      next: response.nextPage,
      prev: response.prevPage,
      maxPage: response.pages,
    }));
  };

  React.useEffect(() => {
    if (items.length !== 0) {
      setLoading(true);
    }
  }, [items]);

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

          setPagination((prev) => ({
            ...prev,
            currentPage:
              name === "next" ? prev.currentPage + 1 : prev.currentPage - 1,
            offset: offset,
            limit: limit,
          }));
          setLoading(false);
        }
      }
    },
    [setPagination, setLoading]
  );

  const sortItems = (): Item[] => {
    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  if (loading === false) {
    return <Preloader />;
  }

  return (
    <Wrapper>
      <Header title="Pokedex" />
      <Search handlerChange={handlerChange} search={search} />
      <PageWidth>
        {sortItems().length !== 0 ? (
          <TinyCards loading={loading} items={sortItems()} />
        ) : (
          <h2 style={{textAlign: "center"}}>We haven't caught any Pokémon with this name yet</h2>
        )}
        {search.length === 0 && (
          <Pagination {...pagination} handlerCurrentPage={handlerCurrentPage} />
        )}
      </PageWidth>
    </Wrapper>
  );
};

export default App;
