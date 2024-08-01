import {
  useFavoriteMutation,
  useMoviesFavorites,
} from "@/hooks/useMoviesFavorites";
import { FaCirclePlus, FaCircleCheck } from "react-icons/fa6";
import { some } from "lodash";

interface Props {
  movieId: string;
}

function ButtonFavorite({ movieId }: Props) {
  const mutation = useFavoriteMutation();
  const { data: moviesFavorites = [] } = useMoviesFavorites();
  const res = some(moviesFavorites, { id: movieId });

  return (
    <div
      onClick={() => {
        mutation.mutate({ movieId });
      }}
      className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-500"
    >
      {res === false ? <FaCirclePlus size={25} /> : <FaCircleCheck size={25} />}
    </div>
  );
}

export default ButtonFavorite;
