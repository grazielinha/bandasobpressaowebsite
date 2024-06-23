import { youtubeVideos } from '../dados/dadosYoutube';
import { PlayIcon } from '@heroicons/react/solid';

export default function VideoThumbnails() {
  return (
    <div className="mt-8 mx-auto max-w-screen-md">
      <div className="flex justify-center mb-4">
        <div className="relative w-full sm:w-1/3 p-4">
          <a href={youtubeVideos[0].videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={youtubeVideos[0].thumbnail} alt={youtubeVideos[0].title} className="w-full h-auto rounded-lg custom-shadow shadow-md" />
            <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white bg-black bg-opacity-50 rounded-full p-2" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {youtubeVideos.slice(1, 4).map((video, index) => (
          <div key={index} className="relative w-full p-4">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} className="w-full h-auto rounded-lg shadow-md custom-shadow" />
              <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white bg-black bg-opacity-50 rounded-full p-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
