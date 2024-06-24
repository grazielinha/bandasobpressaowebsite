import Image from 'next/image';

export default function CardReferencias({ nome, localizacao, tipoEvento, linkFacebook, foto }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 shadow-[inset_0px_0px_30px_5px_#cbd5e0,4px_4px_3px_1px_#5a67d8] transform transition duration-500 hover:scale-105">
      <div className="p-2">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p className="text-sm text-azulPrincipal font-semibold">{nome}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-azulPrincipal font-semibold">{localizacao}</p>
            <p className="text-sm text-azulPrincipal">{tipoEvento}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <a href={linkFacebook} target="_blank" rel="noopener noreferrer">
            <Image
              src={foto}
              alt={nome}
              width={300}
              height={200}
              className="object-cover  rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
