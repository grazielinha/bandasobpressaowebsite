import React from 'react';
import CardServicosHome from './CardServicosHome';
import { dadosServicos } from '../dados/dadosServicos';

const CardHomeGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {dadosServicos.map((servico, index) => (
        <CardServicosHome
          key={index}
          imagem={servico.imagem}
          titulo={servico.titulo}
          descricao={servico.descricao}
        />
      ))}
    </div>
  );
};

export default CardHomeGrid;
