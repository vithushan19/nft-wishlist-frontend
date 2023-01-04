import type { NextPage } from "next";
import { useRouter } from "next/router";
import AddNFTPage from "../../../components/addNFT/AddNFTPage";

const AddToWishListPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const wishlistId = slug as string;

  return (
    <div className="flex flex-col w-full">
      <h1 className="w-full p-4 text-4xl font-bold text-white bg-sky-800">
        <AddNFTPage wishlistId={wishlistId} />
      </h1>
    </div>
  );
};

export default AddToWishListPage;
