import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  pageNo: 1,
  currency: { name: "usd", symbol: "$" },
  loading: false,
  reload: false,
  cryptoData: [],
  handlePageNo: (pageNo) => {},
  handleCurrency: (currency) => {},

  isDark: false,
  handleTheme: () => {},

  coinId: "bitcoin",
  coinData: [],
  loading2: false,
  handleCoinId: (coinId) => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  // ########################  Coins API ##############################
  const [pageNo, setPageNo] = useState(1);
  const [currency, serCurrency] = useState({ name: "usd", symbol: "$" });
  const [loading, setLoading] = useState(false);
  const [cryptoData, setCryptoData] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const pageNoHandler = (pageNo) => {
    setPageNo(pageNo);
  };
  const currencyHandler = (currency) => {
    serCurrency(currency);
  };
  const loadingHandler = () => {
    fetchCurrencyData();
    fetchCoinData();
  };

  const handleTheme = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  // ########################  changing Coins API ##############################

  async function fetchCurrencyData() {
    setLoading(true);
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=${pageNo}&sparkline=true`
    );
    if (!response.ok) {
      throw new Error("response is not ok", response);
    }
    const data = await response.json();
    setCryptoData(data);
    setLoading(false);
  }

  useEffect(() => {
    try {
      fetchCurrencyData();
    } catch (error) {
      console.log("error occured ", error);
    }
  }, [pageNo, currency]);

  // ######################## coinDetail API  ##############################
  const [coinId, setCoindId] = useState("bitcoin");
  const [coinDetail, setCoinDetail] = useState([]);
  const [loading2, setLoading2] = useState(false);

  const coinIdHandler = (coinId) => {
    setCoindId(coinId);
    fetchCoinData();
  };

  const fetchCoinData = async function () {
    setLoading(true);
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/" + coinId
    );
    if (!response.ok) {
      throw new Error(
        "Response is not ok from Api2 fetching coin detail adhere"
      );
    }
    const data = await response.json();
    setCoinDetail(data);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchCoinData();
    } catch (error) {
      console.log("error");
    }
  }, [coinId]);

  return (
    <AuthContext.Provider
      value={{
        pageNo: pageNo,
        handlePageNo: pageNoHandler,
        handleCurrency: currencyHandler,
        cryptoData: cryptoData,
        loading,
        loadingHandler,
        currency,
        coinId,
        coinDetail,
        coinIdHandler,
        isDark,
        handleTheme,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
