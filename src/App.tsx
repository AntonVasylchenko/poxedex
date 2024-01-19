import React from "react";
import { Wrapper } from "./styled";
import { getItems } from "./Api/api";
import { PageWidth } from "./Ui";
import { TinyCards,Header } from "./components";
import { Item } from "./type/index"


const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<Item[]>([]);

  const getData = async (): Promise<void> => {
    setLoading(false);
    setItems([...(await getItems())]);
    setLoading(true);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Header title="Pokedex"/>
      <PageWidth>
        <TinyCards loading={loading} items={items}/>
      </PageWidth>
    </Wrapper>
  );
};

export default App;
