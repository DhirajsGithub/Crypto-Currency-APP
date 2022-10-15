const fetchCoinsList = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
  if (!response.ok) {
    throw new Error("Response is not OK");
  }
  const data = await response.json();
  return data;
};

export default fetchCoinsList;
