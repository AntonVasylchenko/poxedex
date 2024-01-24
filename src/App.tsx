import React from "react";
import { Wrapper } from "./styled";
import { getResponse } from "./Api/api";
import { PageWidth,Pagination } from "./Ui";
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
  }>({
    next: "",
    prev: "",
    currentPage: 1,
    maxPage: 0,
  });

  const getData = async (): Promise<void> => {
    const response = await getResponse(9);
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
    getData();
  }, []);

  const handlerChange = (query: string): void => {
    setSearch(query);
  };

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
        <Pagination {...pagination} />
      </PageWidth>
    </Wrapper>
  );
};

export default App;
