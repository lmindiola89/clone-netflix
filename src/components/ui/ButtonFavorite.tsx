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
  const style =
    "cursor-pointer rounded-full transition hover:bg-white hover:border-2";

  return (
    <div
      onClick={() => {
        mutation.mutate({ movieId });
      }}
    >
      {res === false ? (
        <FaCirclePlus size={30} className={style} />
      ) : (
        <FaCircleCheck size={30} className={style} />
      )}
    </div>
  );
}

export default ButtonFavorite;
