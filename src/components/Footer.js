"use client";
import Image from 'next/image';
import { dadosContato } from '../dados/dadosContato'; // Certifique-se de ajustar o caminho para o seu arquivo dadosContato.js

const Footer = () => {
  return (
    <footer className="bg-white text-black pb-1 px-2">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center md:ml-4 justify-center md:justify-start flex-1 w-full md:w-auto">
          <Image
            src="/imagens/logoBandaColorida.png" 
            alt="Logo da Banda"
            width={100}
            height={50}
          />
        </div>
        <div className="flex-1 md:mr-4 flex items-center justify-center w-full md:w-auto">
          <ul className="flex flex-wrap justify-center space-x-4">
            {dadosContato.map((contato, index) => (
              <li key={index}>
                <a href={contato.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={contato.imagem}
                    alt={`ícone do ${contato.nome}`}
                    width={30}
                    height={30}
                    className="w-8 h-8 duration-300 transform transition-transform hover:translate-y-[-2px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-xs text-black text-center md:text-right w-full md:w-auto">
          <p>&copy; 2024 Banda Sob Pressão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
