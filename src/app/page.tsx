"use client";
import Navbar from "@/components/navigation/Navbar";
import Billboard from "@/components/sections/Billboard";
import MoviesList from "@/components/sections/MoviesList";
import useMoviesList from "@/hooks/useMoviesList";

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  // const { data: favorites = [] } = useFavorites();
  // const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList title="Trending Now" data={movies} />
      </div>
    </>
  );
}
