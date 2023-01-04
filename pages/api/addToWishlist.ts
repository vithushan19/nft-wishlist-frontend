export type AddToWishlistProps = {
  contract_address: string;
  token_id: string;
  wishlist_id: string;
};
export default async function addToWishlist(
  newWishlistItem: AddToWishlistProps
) {
  const URL = "https://nft-wishlist.onrender.com/add_to_wishlist/";
  const { contract_address, token_id, wishlist_id } = newWishlistItem;
  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({ contract_address, token_id, wishlist_id }),
    headers: new Headers({ "content-type": "application/json" }),
  });
  return res.json();
}
