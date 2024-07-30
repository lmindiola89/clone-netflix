import endpoint from "@/lib/endpoints";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/types";

async function fetch() {
  const { data } = await endpoint.get<Movie[]>("movies");
  return data;
}

function useMoviesList() {
  return useQuery({
    queryKey: ["moviesList"],
    queryFn: fetch,
  });
}

export default useMoviesList;
