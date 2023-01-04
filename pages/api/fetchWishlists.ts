export default async function fetchWishlists() {
  const URL = "https://nft-wishlist.onrender.com/wishlists/";
  const res = await fetch(URL);
  return res.json();
}
