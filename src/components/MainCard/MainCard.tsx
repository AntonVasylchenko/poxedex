import React from "react";
import { useLoaderData } from "react-router-dom";

type InformationType = {
  abilities: { ability: { name: string } }[];
  stats: { base_stat: string }[];
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: { front_default: string };
    };
  };
  types:{
    type: {
      name: string
    }
  }[]
};

const MainCard: React.FC = () => {
  const information = useLoaderData() as InformationType;
  console.log(information);

  if (!information) return <></>;
  return (
    <div>
      {information.stats.map((stat, index) => (
        <p key={index}>{stat.base_stat}</p>
      ))}

      <img src={information.sprites.other.dream_world.front_default} alt="" />
    </div>
  );
};

export default MainCard;
