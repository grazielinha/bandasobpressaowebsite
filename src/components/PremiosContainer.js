import React from 'react';
import CardPremios from './CardPremios';
import { premiosData } from '../dados/dadosPremios';

const PremiosContainer = () => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {premiosData.map((premio, index) => (
        <CardPremios key={index} imagem={premio.imagem} link={premio.link} />
      ))}
    </div>
  );
};

export default PremiosContainer;
