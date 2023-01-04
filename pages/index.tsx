import type { NextPage } from "next";
import Link from "next/link";
import { useQuery } from "react-query";
import Button from "../components/ui/Button";
import WishlistRow from "../components/wishlistList/WishlistRow";
import fetchWishlists from "./api/fetchWishlists";

const Home: NextPage = () => {
  const { data: wishlists, status } = useQuery("wishlists", fetchWishlists);
  return (
    <div className="flex flex-col w-full">
      <h1 className="w-full p-4 text-4xl font-bold text-white bg-sky-800">
        My Wishlists
      </h1>
      <Link href="/create">
        <Button text="Create" />
      </Link>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {wishlists.map((wl: any) => (
            <Link key={wl.id} href={`/wishlist/${wl.id}`}>
              <WishlistRow name={wl.name} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
