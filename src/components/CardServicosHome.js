import React from 'react';

const CardServicosHome = ({ imagem, titulo, descricao }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4">
      <div className="bg-blue-500 rounded-md shadow-lg shadow-blue-800 p-4 mb-4 md:mb-0">
        <img src={imagem} alt={titulo} className="w-16 h-16 object-cover" />
      </div>
      <div className="text-center md:text-left md:ml-8">
        <h4 className="text-lg font-semibold">{titulo}</h4>
        <p className="mt-2 md:ml-4">{descricao}</p>
      </div>
    </div>
  );
};

export default CardServicosHome;
