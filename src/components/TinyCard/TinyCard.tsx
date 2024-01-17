import React from 'react'
import { WrapperTinyCard } from './styled';
type TinyCardProp = {
   name: string;
   id: number;
   weight: number;
   height: number
   sprite: string
}


const TinyCard: React.FC<TinyCardProp> = ({name,id,weight,height,sprite}) => {
  return (
    <WrapperTinyCard>
      <p>name: {name}</p>
      <p>id: {id}</p>
      <p>weight: {weight}</p>
      <p>height: {height}</p>
      <img src={sprite} alt={name} loading='lazy' />
    </WrapperTinyCard>
  )
}

export default TinyCard