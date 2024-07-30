import { useFavoriteMutation } from "@/hooks/useMoviesFavorites";
import { FiPlus } from "react-icons/fi";

interface Props {
  movieId: string;
}

function ButtonFavorite({ movieId }: Props) {
  const mutation = useFavoriteMutation();

  return (
    <div
      onClick={() => {
        mutation.mutate({ movieId });
      }}
      className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
    >
      <FiPlus />
    </div>
  );
}

export default ButtonFavorite;
