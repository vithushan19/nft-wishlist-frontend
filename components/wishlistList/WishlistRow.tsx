type WishlistRowProps = {
  name: string;
};

export default function WishlistRow({ name }: WishlistRowProps) {
  return (
    <div className="w-full p-4 text-white border-b-4 bg-slate-900 hover:bg-sky-500 border-sky-900">
      <p>{name}</p>
    </div>
  );
}
