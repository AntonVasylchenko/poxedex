import React from "react";
import { Wrapper, WrapperGrid } from "./styled";
import { getItems } from "./Api/api";
import { TinyCard } from "./components";

type Item = {
  name: string;
  id: number;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
};

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
      {loading ? (
        <WrapperGrid>
          {items.map((item) => {
            return (
              <TinyCard
                key={item.id}
                name={item.name}
                id={item.id}
                weight={item.weight}
                height={item.height}
                sprite={item.sprites.front_default}
              />
            );
          })}
        </WrapperGrid>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default App;
