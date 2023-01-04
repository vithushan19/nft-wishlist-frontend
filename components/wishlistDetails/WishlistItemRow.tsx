export type WishlistItemRowProps = {
  image: string;
  name: string;
  collection: string;
};
export default function WishlistItemRow({
  image,
  name,
  collection,
}: WishlistItemRowProps) {
  return (
    <div className="grid grid-cols-1 transition-all transform cursor-pointer group group-hover:scale-110 md:grid-cols-12 hover:bg-orange-600 bg-slate-400">
      <img
        className="col-span-2 transition transform group-hover:scale-110 hover:scale-110"
        src={image}
      />
      <div className="flex flex-col justify-center col-span-10 p-4 font-normal group-hover:font-bold">
        <p>{name ? name : "Untitled"}</p>
        <p className="text-2xl">{collection}</p>
      </div>
    </div>
  );
}
