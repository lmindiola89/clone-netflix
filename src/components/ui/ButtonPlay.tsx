import { FaCirclePlay } from "react-icons/fa6";
function ButtonPlay() {
  return (
    <div className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-500">
      <FaCirclePlay size={25} />
    </div>
  );
}

export default ButtonPlay;
