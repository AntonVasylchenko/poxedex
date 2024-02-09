import React from "react";
import { useLoaderData } from "react-router-dom";
import { CircleStats, PageWidth } from "../../ui";
import { colors } from "../../constants";
import { StatsWrapper, RateWrapper, InfoWrapper, InfoImage,AddTeam } from "./styled";
import { Item } from "../../type/index";
import { useBoolen } from "../../hook";

type InformationType = {
  abilities: { ability: { name: string } }[];
  stats: { base_stat: string; stat: { name: string } }[];
  height: number;
  weight: number;
  name: string;
  id: number;
  sprites: {
    front_default: string;
    back_default: string;
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
  const localTeam = localStorage.getItem("team");
  const { status, handlerStatus } = useBoolen(localTeam ? [...JSON.parse(localTeam)].some( el => +el.id === +information.id) : false);
  const generalState = [...information.stats].reduce(
    (accum, elem) => accum + +elem.base_stat,
    0
  );

  const handlerAddToTeam = () => {
    const teamItem = {
      name: information.name,
      id: information.id,
      weight: information.weight,
      height: information.height,
      sprites: {
        front_default: information.sprites.front_default,
        back_default: information.sprites.back_default,
        other: {
          dream_world: {
            front_default: information.sprites.other.dream_world.front_default
          }
        }
      }
    }

    const isLocalStore = localTeam ? [...JSON.parse(localTeam)].some( el => +el.id === +information.id) : null;
  
    if (!localTeam) {
      const team: Item[] = [];
      team.push(teamItem)
      localStorage.setItem("team",JSON.stringify(team));
    } else if (!isLocalStore && localTeam) {
      const parsedLocalTeam:Item[] = JSON.parse(localTeam);
      parsedLocalTeam.push(teamItem)
      localStorage.setItem("team",JSON.stringify(parsedLocalTeam));
    } else if (isLocalStore && localTeam) {
      const parsedLocalTeam:Item[] = JSON.parse(localTeam);
      const filterLocalTeam = [...parsedLocalTeam].filter( elem => +elem.id !== +information.id);
      localStorage.setItem("team",JSON.stringify(filterLocalTeam));
    }   

    handlerStatus()
  }

  if (!information) return <></>;
  return (
    <PageWidth>
      <InfoWrapper>
        <AddTeam onClick={handlerAddToTeam}>{!status ? "Add to Team" : "Delete from Team"} </AddTeam>

        <InfoImage>
          <img
            src={information.sprites.other.dream_world.front_default}
            alt={information.name}
            loading="lazy"
          />
        </InfoImage>
        <RateWrapper>
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
          <CircleStats
            name="Capture Rate"
            color="#09BC8A"
            stats={+(generalState / information.stats.length).toFixed(0)}
          />
        </RateWrapper>
      </InfoWrapper>
    </PageWidth>
  );
};

export default MainCard;
