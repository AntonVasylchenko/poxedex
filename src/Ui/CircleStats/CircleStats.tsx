import React from "react";
import { CirleBar, CirleBarWrapper } from "./styled";
type CircleStatsType = {
  name: string;
  color: string;
  stats: number;
};
const CircleStats: React.FC<CircleStatsType> = ({ name, color, stats }) => {
  return (
    <CirleBarWrapper>
      <CirleBar color={color} value={stats}>
        <progress value={stats} max="100">
          {stats}
        </progress>
        <span>{stats}</span>
      </CirleBar>
      <p>{name}</p>
    </CirleBarWrapper>
  );
};

export default CircleStats;
