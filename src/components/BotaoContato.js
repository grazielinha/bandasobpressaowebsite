export default function BotaoContato({ nome, imagem, cor,link }) {
  return (
    <a href={link} className={`flex justify-around shadow-md items-center p-4 rounded ${cor} text-white w-full sm:w-48 duration-300 transform transition-transform hover:translate-y-[-2px]`}>
      <img src={imagem} alt="Ícone" className="w-6 h-6 mr-6" />
      {nome}
    </a>
  );
}
