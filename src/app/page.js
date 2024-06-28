import Image from "next/image";
import "./globals.css";
import CardHomeGrid from "../components/CardHomeGrid";
import Ensaio from "../components/Ensaio";
import PremiosContainer from "../components/PremiosContainer";

export const metadata = {
  title: "Banda Sob Pressão",
  description: "Site da Banda Sob Pressão",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contêiner para a imagem de fundo */}
      <div className="relative w-full h-[48vh]">
        <div className="hero-section"></div>
        <div className="hero-overlay">
          <h1 className="text-4xl italic text-white">A BANDA CERTA</h1>
          <h1 className="text-4xl italic text-white">
            PARA O <span className="font-bold ">SEU</span> EVENTO!
          </h1>
        </div>
      </div>
      <div className="transition-blur"></div>
      {/* Seção para o restante do conteúdo */}
      <div className="py-4 main-page flex-grow mt-0 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center md:text-4xl mt-12 mb-8 roboto-thin">O que a <span className="font-bold ">Banda Sob Pressão</span> oferece:</h2>
        <div className="p-4 w-full max-w-screen-lg mx-auto">
          <CardHomeGrid />
        </div>

        <div className="py-8 w-full max-w-screen-lg mx-auto mt-8">
          <h2 className="pb-8 text-2xl text-center md:text-4xl font-semibold">
            Venha nos conhecer e participe de nosso ensaio!
          </h2>
          <Ensaio />
        </div>
        <div className=" py-4 w-full max-w-screen-lg mx-auto mt-8">
        <h4 className="text-2xl text-center roboto-light-italic">
  <u>  Prêmios da banda  </u>
</h4>

          <PremiosContainer />
        </div>
      </div>
    </div>
  );
}
