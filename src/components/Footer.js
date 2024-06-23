"use client";
import Image from 'next/image';

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
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/instagram.png"
                alt="ícone do Instagram"
                width={30}
                height={30}
                className="w-8 h-8"
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/facebook.png"
                alt="ícone do Facebook"
                width={30}
                height={30}
                className="w-8 h-8"
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/whatsapp.png"
                alt="ícone do WhatsApp"
                width={30}
                height={30}
                className="w-8 h-8"
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/gmail.png"
                alt="ícone do Gmail"
                width={30}
                height={30}
                className="w-8 h-8"
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/youtube.png"
                alt="ícone do Youtube"
                width={30}
                height={30}
                className="w-8 h-8"
              />
            </a></li>
            <li><a href="#">
              <Image
                src="/imagens/itens_footer/spotify.png"
                alt="ícone do Spotify"
                width={30}
                height={30}
                className="w-8 h-8"
              />
            </a></li>
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
