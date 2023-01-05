import Link from "next/link";
import { useQuery } from "react-query";
import fetchWishlist from "../../pages/api/fetchWishlist";
import Button from "../ui/Button";
import WishlistItemRow from "./WishlistItemRow";

type WishlistDetailsPageProps = {
  wishlistId: string;
};

type WishlistItemData = {
  image: string;
  name: string;
  collection: string;
  token_id: string;
  contract_address: string;
};

export default function WishlistDetailsPage({
  wishlistId,
}: WishlistDetailsPageProps) {
  const fetchWishlistQuery = (listId: string) => {
    return useQuery(["wishlist", listId], () => fetchWishlist(listId));
  };
  const { data: wishlistData, status } = fetchWishlistQuery(wishlistId);

  return (
    <div className="flex flex-col w-full text-white">
      {wishlistData ? (
        <h1 className="w-full p-4 text-4xl font-bold text-white bg-sky-800">
          {wishlistData.name}
        </h1>
      ) : null}
      <div className="flex flex-col items-center">
        <Link href={`/wishlist/${wishlistId}/add`}>
          <Button text="Add" />
        </Link>
      </div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" &&
        wishlistData.items &&
        wishlistData.items.map((item: WishlistItemData, i: number) => (
          <div key={i} className="mb-4">
            <Link
              target={"_blank"}
              href={`https://opensea.io/assets/ethereum/${item.contract_address}/${item.token_id}`}
            >
              <WishlistItemRow
                image={item.image}
                name={item.name}
                collection={item.collection}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}
