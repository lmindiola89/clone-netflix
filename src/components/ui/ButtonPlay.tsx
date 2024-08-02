import { FaCirclePlay } from "react-icons/fa6";
function ButtonPlay() {
  return (
    <div>
      <FaCirclePlay
        size={30}
        className="cursor-pointer rounded-full transition hover:bg-white hover:border-2"
      />
    </div>
  );
}

export default ButtonPlay;
