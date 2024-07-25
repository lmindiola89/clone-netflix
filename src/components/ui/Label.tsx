interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function Label({ children, ...props }: Props) {
  return (
    <label
      {...props}
      className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
    >
      {children}
    </label>
  );
}

export default Label;
