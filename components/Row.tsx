import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react';
import { Movie } from '../types';
import { Thumbnail } from './Thumbnail';

interface Props {
  title: string;
  movies: Movie[];
}
export const Row: React.FC<Props> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // console.log(rowRef.current!.scrollLeft, rowRef.current!.clientWidth);

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursur-pointer transition hover:scale-125 group-hover:opacity-100 opacity-0 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursur-pointer transition hover:scale-125 group-hover:opacity-100 opacity-0"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};
