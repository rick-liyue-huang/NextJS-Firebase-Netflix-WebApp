import Image from 'next/image';
import React from 'react';
import { Movie } from '../types';

interface Props {
  movie: Movie;
}
export const Thumbnail: React.FC<Props> = ({ movie }) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 md:h-36 md:min-w-[260px] md:hover:scale-125">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};
