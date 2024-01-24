import React from "react";
import { WrapperGrid } from "./styled";
import { TinyCard } from "../index";
import { Item } from "../../type/index"

type TinyCardsProps = {
  loading: boolean;
  items: Item[];
};

const TinyCards: React.FC<TinyCardsProps> = ({ loading, items }) => {
  return (
    <WrapperGrid>
      {loading ? (
        items.map((item) => {
          return (
            <TinyCard
              key={item.id}
              name={item.name}
              id={item.id}
              weight={item.weight}
              height={item.height}
              sprite={{
                front: item.sprites.front_default,
                back: item.sprites.back_default,
              }}
            />
          );
        })
      ) : (
        <></>
      )}
    </WrapperGrid>
  );
};

export default TinyCards;
