import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../components/ui/Button";
import createWishlist from "./api/createWishlist";

export default function CreateWishlistPage() {
  const [name, setName] = useState("");

  const router = useRouter();

  const onSaveClick = async () => {
    await createWishlist(name);
    router.push("/");
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="w-full p-4 text-4xl font-bold text-white bg-sky-800">
        Create Wishlist
      </h1>
      <div className="flex items-center p-4">
        <p className="mr-4">Name</p>
        <input
          className="p-2 border-4 border-slate-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button text="Save" onClick={onSaveClick} />
    </div>
  );
}
