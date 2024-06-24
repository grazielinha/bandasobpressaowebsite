import BotaoContato from './BotaoContato';
import { dadosContato } from '../dados/dadosContato';

export default function ContatoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {dadosContato.map((contato, index) => (
        <BotaoContato 
          key={index} 
          nome={contato.nome} 
          imagem={contato.imagem} 
          cor={contato.cor}
          link={contato.link}  
        />
      ))}
    </div>
  );
}
