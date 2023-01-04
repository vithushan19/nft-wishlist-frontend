import { useRouter } from "next/router";
import { isValidElement, useState } from "react";
import { useMutation } from "react-query";
import addToWishlist, {
  AddToWishlistProps,
} from "../../pages/api/addToWishlist";
import Button from "../ui/Button";

type AddNFTPageProps = {
  wishlistId: string;
};

export default function AddNFTPage({ wishlistId }: AddNFTPageProps) {
  const OPEN_SEA_PREFIX = "https://opensea.io/assets/ethereum/";
  const [url, setUrl] = useState("");
  const router = useRouter();
  const [showValid, setShowValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const addToWishlistMutation = useMutation({
    mutationFn: (newWishlistItem: AddToWishlistProps) => {
      return addToWishlist(newWishlistItem);
    },
    onSuccess: () => {
      router.push(`/wishlist/${wishlistId}`);
    },
  });

  const onSaveClick = () => {
    const parts = url.split("/");
    const contractAddress = parts[5];
    const tokenId = parts[6];

    const newWishlistItem: AddToWishlistProps = {
      contract_address: contractAddress,
      token_id: tokenId,
      wishlist_id: wishlistId,
    };

    // check input
    if (isValid(url)) {
      setShowValid(true);
      addToWishlistMutation.mutate(newWishlistItem);
    } else {
      setShowError(true);
    }
  };

  const isValid = (url: string) => {
    if (url.startsWith(OPEN_SEA_PREFIX)) {
      return true;
    } else {
      return false;
    }
  };
  const onUrlChange = (url: string) => {
    setUrl(url);
    setShowValid(false);
    setShowError(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="w-full p-4 text-4xl font-bold text-white bg-sky-800">
        Add NFT
      </h1>
      <div className="flex flex-col items-center p-4 md:flex-row">
        <p className="mr-4 text-2xl">Open Sea URL</p>
        <input
          className={`p-2 border-4 text-slate-900 w-full  ${
            showValid
              ? "border-green-500"
              : showError
              ? "border-red-500"
              : "border-slate-500"
          }`}
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
        />
        {showError ? (
          <p className="ml-4 text-red-500">Error: Invalid URL</p>
        ) : null}
      </div>
      <Button text="Save" onClick={onSaveClick} />
    </div>
  );
}
