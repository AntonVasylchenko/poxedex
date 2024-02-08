import React from "react";
import { Card } from "./styled";
import { Link } from "react-router-dom";
type TinyCardProp = {
  name: string;
  id: number;
  sprite: string;
};

const TinyCard: React.FC<TinyCardProp> = ({
  name,
  id,
  sprite,
}) => {
  return (
    <Card>
      <Link to={`/poxedex/pokemon/${name}`}>
        <span className="card__number">#{id}</span>
        <div className="card__container">
          <div className="card__info">
            <h2 className="card__title">{name}</h2>
          </div>
          <div className="card__photo">
            <img
              className="card__photo--front"
              src={sprite}
              alt={name}
              loading="lazy"
            />
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default TinyCard;
