export default async function fetchWishlist(wishlistId: string) {
  const URL = "https://nft-wishlist.onrender.com/wishlist/" + wishlistId;
  const res = await fetch(URL);

  const wishlistData = await res.json();

  const items = [];

  for (let index = 0; index < wishlistData.items.length; index++) {
    const element = wishlistData.items[index];
    const tokenData = await fetchTokenData(
      element.contract_address,
      element.token_id
    );

    items.push(tokenData);
  }

  return { ...wishlistData, items };
}

async function fetchTokenData(contract_address: string, token_id: string) {
  const tokens = contract_address + ":" + token_id;
  const TOKEN_URL = "https://api.reservoir.tools/tokens/v5?tokens=" + tokens;
  const tokenRes = await fetch(TOKEN_URL);
  const tokenJSON: TokenResponse = await tokenRes.json();

  const name = tokenJSON.tokens[0].token.name;
  const image = tokenJSON.tokens[0].token.image;
  const collection = tokenJSON.tokens[0].token.collection.name;

  const mappedItem = { name, image, collection, contract_address, token_id };

  return mappedItem;
}

type TokenResponse = {
  tokens: Token[];
};

type Token = {
  token: TokenData;
};

type TokenData = {
  name: string;
  image: string;
  collection: CollectionData;
};

type CollectionData = {
  name: string;
};
