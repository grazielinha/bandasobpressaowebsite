export default function BotaoContato({ nome, imagem, cor }) {
  return (
    <a href="#" className={`flex justify-around items-center p-4 rounded ${cor} text-white w-full sm:w-48`}>
      <img src={imagem} alt="Ícone" className="w-6 h-6 mr-6" />
      {nome}
    </a>
  );
}
