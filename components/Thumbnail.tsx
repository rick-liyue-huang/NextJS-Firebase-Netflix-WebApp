import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { Movie } from '../types';

interface Props {
  movie: Movie;
}
export const Thumbnail: React.FC<Props> = ({ movie }) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 md:h-36 md:min-w-[260px] md:hover:scale-125">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
      />
    </div>
  );
};
