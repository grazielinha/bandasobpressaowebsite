import React from 'react';

const CardPremios = ({ imagem, link }) => {
  return (
    <div className="flex justify-center p-4">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform transition-transform hover:translate-y-[-2px]">
          <img src={imagem} alt="Prêmio" className="w-32 h-32 object-cover" />
        </div>
      </a>
    </div>
  );
};

export default CardPremios;
