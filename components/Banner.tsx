import { InformationCircleIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { baseUrl } from '../constants/movie';
import { Movie } from '../types';

interface Props {
  netflixOriginals: Movie[];
}

/**
 * * @define the banner component
 * @params
 * @returns
 */
export const Banner: React.FC<Props> = ({ netflixOriginals }) => {
  const [movie, setmovie] = useState<Movie | null>(null);

  useEffect(() => {
    setmovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[98vh] w-screen -z-10">
        <Image
          layout="fill"
          objectFit="cover"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        />
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg lg:max-w-2xl lg:text-2xl text-shadow-md">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:w-7 md:h-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info
          <InformationCircleIcon className="w-5 h-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};
