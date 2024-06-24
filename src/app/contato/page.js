export const metadata = {
  title: "Contato",
  description: "Site da banda Sob Pressão",
};

import ContatoGrid from '../../components/ContatoGrid';
import FormularioContato from '../../components/FormularioContato';

export default function Contato() {
  return (
    <div className="flex flex-col min-h-screen items-center p-8  bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
      <h1 className="mt-12 text-3xl font-bold mb-8">Onde pode nos encontrar</h1>
      <div className="mt-12 text-1xl font-bold mb-8"><ContatoGrid /></div>
      
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Fale Conosco</h2>
        <div className="flex flex-col mt-12 mb-4 text-center md:text-left">
      <p className="block md:hidden mt-2">
        Faça contato por e-mail diretamente pelo site ou entre em contato por WhatsApp.
      </p> 
      <p className="hidden md:block mt-2">
        Faça contato por e-mail diretamente pelo site
        <span className="block">ou entre em contato por WhatsApp.</span>
      </p>
    </div>

      </div>
      <FormularioContato />
    </div>
  );
}
