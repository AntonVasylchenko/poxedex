import { useId } from "react";
import iconPokemons from "../assets/pokemons.png";
import iconItems from "../assets/items.png";
import iconTeam from "../assets/team.png";

export const navPaths = () => {
  return [
    {
      name: "Pokemons",
      path: "pokemon/",
      image: iconPokemons,
      id: useId(),
    },
    {
      name: "Items",
      path: "items/",
      image: iconItems,
      id: useId(),
    },
    {
      name: "My Team",
      path: "team/",
      image: iconTeam,
      id: useId(),
    },
  ];
};
