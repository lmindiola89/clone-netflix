interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: Props) {
  return (
    <input
      {...props}
      className=" block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
      placeholder=" "
    />
  );
}

export default Input;
