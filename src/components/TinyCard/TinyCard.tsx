import React from 'react'
import style from './TinyCard.module.css'
type TinyCardProp = {
   name: string;
   id: number;
   weight: number;
   height: number
   sprite: {
    front: string,
    back: string
   }
}



const TinyCard: React.FC<TinyCardProp> = ({name,id,weight,height,sprite}) => {
  return (
    <div className={style.tiny_card}>   
      <span className={style.tiny_card__number}>#{id}</span>
      <div className={style.tiny_card__container}>
        <div className={style.tiny_card__info}>
            <h2 className={style.tiny_card__title}>{name}</h2>
            <ul className={style.tiny_card__list}>
              <li className={style.tiny_card__item}>
                <span className={style.tiny_card__item_name}>Weight: {weight}</span>
              </li>
              <li className={style.tiny_card__item}>
                <span className={style.tiny_card__item_name}>Height: {height}</span>
              </li>
            </ul>
        </div>
        <div className={style.tiny_card__photo}>
            <img className={style.tiny_card__photo_front} src={sprite.front} alt={name} loading='lazy' />
            <img className={style.tiny_card__photo_back} src={sprite.back} alt={name} loading='lazy' />
        </div>
      </div>
    </div>
  )
}

export default TinyCard