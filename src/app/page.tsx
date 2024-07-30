"use client";
import Navbar from "@/components/navigation/Navbar";
import Billboard from "@/components/sections/Billboard";
import MoviesList from "@/components/sections/MoviesList";
import useMoviesList from "@/hooks/useMoviesList";
import { useMoviesFavorites } from "@/hooks/useMoviesFavorites";

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  const { data: moviesFavorites = [] } = useMoviesFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList title="Trending Now" data={movies} />
        <MoviesList title="My List" data={moviesFavorites} />
      </div>
    </>
  );
}
