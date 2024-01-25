import React from "react";
import { Wrapper } from "./styled";
import { getResponse } from "./Api/api";
import { PageWidth, Pagination } from "./Ui";
import { TinyCards, Header, Search } from "./components";
import { Item } from "./type/index";

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
    currentPage: 1,
    maxPage: 0,
    offset: "0",
    limit: "9"
  });

  const getData = async (offset: string,limit:string): Promise<void> => {
    const response = await getResponse(offset,limit);
    setLoading(false);
    setItems([...response.items]);
    setPagination((prev) => ({
      ...prev,
      next: response.nextPage,
      prev: response.prevPage,
      maxPage: response.pages,
    }));
    setLoading(true);
  };

  React.useEffect(() => {
    getData(pagination.offset,pagination.limit);
  }, [pagination.offset,pagination.limit]);

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
            currentPage: name === "next" ? prev.currentPage + 1 : prev.currentPage - 1,
            offset: offset,
            limit: limit
          }));

        }
      }
    },
    [setPagination]
  );
  
  const sortItems = (): Item[] => {
    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  return (
    <Wrapper>
      <Header title="Pokedex" />
      <Search handlerChange={handlerChange} />
      <PageWidth>
        <TinyCards loading={loading} items={sortItems()} />
        <Pagination {...pagination} handlerCurrentPage={handlerCurrentPage} />
      </PageWidth>
    </Wrapper>
  );
};

export default App;
