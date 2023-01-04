type WishlistRowProps = {
  name: string;
};

export default function WishlistRow({ name }: WishlistRowProps) {
  return (
    <div className="w-full p-4 border-b-4 bg-sky-200 border-sky-900">
      <p>{name}</p>
    </div>
  );
}
