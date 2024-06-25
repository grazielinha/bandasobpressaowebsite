import React from 'react';
import CardMusica from '@/components/CardMusica';
import dadosRepertorio from '@/dados/dadosRepertorio';
import { PlayIcon } from '@heroicons/react/solid';

export const metadata = {
  title: "Repertório",
  description: "Site da banda Sob Pressão",
};

const Repertorio = () => {
  const pegarMusicas = (musicas) => {
    return musicas.map((musica, index) => (
      <div key={index} className="max-w-xs mx-auto"> {/* Centraliza os cards no modo móvel */}
        <CardMusica
          imagem={musica.imagem}
          nomeMusica={musica.nomeMusica}
          artista={musica.artista}
        />
      </div>
    ));
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-blue-600 text-white">
      <div className="text-center bg-cover bg-center" style={{ backgroundImage: "url('/imagens/foto-vinil-repertorio.png')" }}>
        <div className="text-center mt-20 mb-20 bg-opacity-70 p-5">
          <h1 className="text-4xl font-bold">REPERTÓRIO</h1>
          <p className="text-center">Alguns exemplos do que tocamos.</p>
          <p>Clique no play e escute a playlist no Spotify para ter uma prévia de nosso repertório!</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-azulPrincipal to-azulEmBaixo w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Rock dos Anos 60
          </a>
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.rockAnos60)}
        </div>
      </div>

      <div className="bg-azulEmBaixo w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Rock Nacional
            </a>
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.rockNacional)}
        </div>
      </div>

      <div className="bg-gradient-to-b from-azulEmBaixo to-azulPrincipal w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Rock Internacional
          </a>
          </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.rockInternacional)}
        </div>
      </div>

      <div className="bg-azulPrincipal w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Balada dos Anos 80
          </a>
          </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.baladaAnos80)}
        </div>
      </div>

      <div className="bg-gradient-to-b from-azulPrincipal to-azulEmBaixo w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Disco Music
          </a>
          </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.discoMusic)}
        </div>
      </div>

      <div className="bg-azulEmBaixo w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
          Sertanejo Universitário
          </a>
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.popRockNacional)}
        </div>
      </div>

      <div className="bg-gradient-to-b from-azulEmBaixo to-azulPrincipal w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Sertanejo
          </a>
          </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.sertanejo)}
        </div>
      </div>

      <div className="bg-azulPrincipal w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Pagode
          </a></h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.pagode)}
        </div>
      </div>

      <div className="bg-gradient-to-b from-azulPrincipal to-azulEmBaixo w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Música Gaúcha
          </a>
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.musicaGaucha)}
        </div>
      </div>

      <div className="bg-azulEmBaixo w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Forró
            </a>
         </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.forro)}
        </div>
      </div>

      <div className="bg-gradient-to-b from-azulEmBaixo to-azulPrincipal w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Funk
            </a>
          </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.funk)}
        </div>
      </div>

      <div className="bg-azulPrincipal w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            OktoberFest
            </a>
          </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.oktoberFest)}
        </div>
      </div>

      <div className="bg-gradient-to-b from-azulPrincipal to-azulEmBaixo w-full py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          <a href="#" className="flex items-center justify-center text-white hover:text-gray-200">
            <PlayIcon className="h-8 w-8 mr-2" /> {/* Ícone de play */}
            Reggae
            </a>
          </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pegarMusicas(dadosRepertorio.reggae)}
        </div>
      </div>
    </div>
  );
};

export default Repertorio;
