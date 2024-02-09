import React from "react";
import { PageWidth } from "../../ui";
import { TinyCards } from "../../components";
import { Item } from "../../type/index";

const MyTeam: React.FC = () => {
  const localTeam = localStorage.getItem("team");

  if (!localTeam) {
    return <h2>You have not caught a single Pokémon</h2>;
  }
  const parsedLocalTeam: Item[] = JSON.parse(localTeam);

  return (
    <PageWidth>
      <TinyCards loading={true} items={parsedLocalTeam} />
      {parsedLocalTeam.length === 0 && (
        <h2>You have not caught a single Pokémon</h2>
      )}
    </PageWidth>
  );
};

export default MyTeam;
