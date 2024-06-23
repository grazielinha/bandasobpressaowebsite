import CardGridReferencias from '@/components/CardGridReferencias';
import Image from 'next/image';

export const metadata = {
  title: "Referências",
  description: "Site da banda Sob Pressão",
};


const ReferenciasPage = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
      <h1 className="text-3xl font-bold text-center mb-8">Eventos Realizados</h1>
      <p className="text-lg  text-center mb-8">Clique sobre as fotos e você poderá conversar com os noivos ao qual já tocamos em seus casamentos, fique a vontade para perguntar como foi a experiência deles coma banda!</p>
      <CardGridReferencias />
    </div>
  );
  };
  
  export default ReferenciasPage;
