export default async function createWishlist(name: string) {
  const URL = "https://nft-wishlist.onrender.com/wishlist/";

  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({ name: name }),
    headers: new Headers({ "content-type": "application/json" }),
  });
  return res.json();
}
