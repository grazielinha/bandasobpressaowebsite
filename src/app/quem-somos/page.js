export const metadata = {
  title: "Quem Somos",
  description: "Site da banda Sob Pressão",
};


import React from 'react';
import Image from 'next/image';

const QuemSomosPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
            <h1 className="text-3xl mt-20 font-bold my-4">Quem Somos</h1>
            <p className="text-lg p-2 text-center">A Banda Sob Pressão nasceu em 2011 da paixão pela musica de alguns amigos que trabalharam juntos no ramo da construção civil em Balneário Camboriú.</p>
            <p className="text-lg p-1 text-center">Amamos o que fazemos e temos muito respeito, cuidado e responsabilidade com nossos contratantes.</p>
            <p className="text-lg p-2 text-center">Queremos entender suas necessidades e contribuir com a melhor trilha sonora para a realização do evento do seus sonhos!</p>
            <div className="flex-grow flex flex-col justify-center items-center my-4">
                <Image
                    src="/imagens/foto-quemsomos-1.jpeg"
                    alt="Descrição da Imagem 1"
                    width={700}
                    height={200}
                    className="my-2 custom-shadow shadow-md"
                />
                <p className="text-lg text-center my-4">Da esquerda para direita: Hercilio, Graziela, Daniel, Gabriel, Filipe, Kaue e Marcos.</p>
            </div>
        </div>
    );
};

export default QuemSomosPage;




  