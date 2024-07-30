import { FiPlay } from "react-icons/fi";
function ButtonPlay() {
  return (
    <div className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
      <FiPlay />
    </div>
  );
}

export default ButtonPlay;
