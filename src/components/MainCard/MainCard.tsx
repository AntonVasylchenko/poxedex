import React from "react";
import { useLoaderData } from "react-router-dom";
import { CircleStats, PageWidth } from "../../ui";
import { colors } from "../../constants";
import { StatsWrapper } from "./styled";

type InformationType = {
  abilities: { ability: { name: string } }[];
  stats: { base_stat: string; stat: { name: string } }[];
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: { front_default: string };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

const MainCard: React.FC = () => {
  const information = useLoaderData() as InformationType;

  if (!information) return <></>;
  return (
    <PageWidth>
      
      <StatsWrapper>
        <h2>Stats</h2>
        {information.stats.map((stat, index) => {
          return (
            <CircleStats
              key={React.useId()}
              name={stat.stat.name}
              color={colors[index]}
              stats={+stat.base_stat}
            />
          );
        })}
      </StatsWrapper>
    </PageWidth>
  );
};

export default MainCard;
