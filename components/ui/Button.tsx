type ButtonProps = {
  text: string;
  onClick?: () => void;
};
export default function Button({ text, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="w-40 p-4 my-4 font-bold text-white bg-indigo-500 rounded-lg cursor-pointer hover:bg-indigo-300"
    >
      {text}
    </div>
  );
}
