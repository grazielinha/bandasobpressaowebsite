import React from 'react';

const CardMusica = ({ imagem, nomeMusica, artista }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img src={imagem} alt={`${nomeMusica} capa do álbum`} className="w-full h-full object-cover" />
      </div>
      <div className="mt-2 text-center">
        <p className="text-lg font-semibold text-white">{nomeMusica}</p>
        <p className="text-sm text-gray-300">{artista}</p>
      </div>
    </div>
  );
};

export default CardMusica;
