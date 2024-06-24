import Carrossel from '@/components/Carrossel';
import VideoThumbnails from '@/components/VideoThumbnails';

export const metadata = {
  title: "Galeria",
  description: "Site da banda Sob Pressão",
};

export default function Galeria() {
  return (
    <div className="p-8 bg-gradient-to-b from-azulPrincipal to-azulEmBaixo">
      <h1 className="text-3xl font-bold text-center mb-8">Galeria</h1>

      <div className="w-full max-w-screen-lg mx-auto  ">
      <Carrossel />
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">TAMBÉM ESTAMOS NO YOUTUBE!</h2>
        <p className="text-lg mb-8">
        Clique e assista!
        </p>
      </div>
      <VideoThumbnails />
    </div>
  );
}
