import React from "react";
import { Card } from "./styled";
import { Link } from "react-router-dom";
type TinyCardProp = {
  name: string;
  id: number;
  weight: number;
  height: number;
  sprite: {
    front: string;
    back: string;
  };
};

const TinyCard: React.FC<TinyCardProp> = ({
  name,
  id,
  weight,
  height,
  sprite,
}) => {
  return (
    <Card>
      <Link to={`/poxedex/pokemon/${name}`}>
        <span className="card__number">#{id}</span>
        <div className="card__container">
          <div className="card__info">
            <h2 className="card__title">{name}</h2>
            <ul className="card__list">
              <li className="card__item">
                <span className="card__item--name">Weight: {weight}</span>
              </li>
              <li className="card__item">
                <span className="card__item--name">Height: {height}</span>
              </li>
            </ul>
          </div>
          <div className="card__photo">
            <img
              className="card__photo--front"
              src={sprite.front}
              alt={name}
              loading="lazy"
            />
            <img
              className="card__photo--back"
              src={sprite.back}
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
