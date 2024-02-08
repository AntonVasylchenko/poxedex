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
              sprite={item.sprites.other.dream_world.front_default}
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
