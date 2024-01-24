import React from "react";
import { Wrapper } from "./styled";
import { getItems } from "./Api/api";
import { PageWidth } from "./Ui";
import { TinyCards, Header, Search } from "./components";
import { Item } from "./type/index";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<Item[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const getData = async (): Promise<void> => {
    setLoading(false);
    setItems([...(await getItems())]);
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
      </PageWidth>
    </Wrapper>
  );
};

export default App;
