import CardReferencias from './CardReferencias';
import dadosReferencias from '../dados/dadosReferencias';

export default function CardGridReferencias() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {dadosReferencias.map((card, index) => (
        <CardReferencias 
          key={index} 
          nome={card.nome} 
          localizacao={card.localizacao} 
          tipoEvento={card.tipoEvento} 
          linkFacebook={card.linkFacebook} 
          foto={card.foto} 
        />
      ))}
    </div>
  );
}
