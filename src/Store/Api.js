import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  pageNo: 1,
  currency: "usd",
  perPage: 100,
  sparkline: false,
  loading: false,
  reload : false,
  cryptoData: [],

  handlePageNo: (pageNo) => {},
  handleCurrency: (currency) => {},
  // handlePerPage : (perPage)=>{},
  // handleLoading : ()=>{},
  // handleCryptoData : ()=>{},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [pageNo, setPageNo] = useState(1);
  const [currency, serCurrency] = useState("usd");
  const [loading, setLoading] = useState(false);
  const [cryptoData, setCryptoData] = useState([]);
  const pageNoHandler = (pageNo) => {
    setPageNo(pageNo);
  };
  const currencyHandler = (currency) => {
    serCurrency(currency);
  };
  const loadingHandler = ()=>{
    fetchCurrencyData();
  }
  // const cryptoDataHandler = ()=>{

  // }

  async function fetchCurrencyData() {
    setLoading(true);
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${pageNo}&sparkline=true`
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

  return (
    <AuthContext.Provider value={{ pageNo: pageNo, handlePageNo: pageNoHandler, handleCurrency: currencyHandler, cryptoData :  cryptoData, loading, loadingHandler}}>
      {props.children}
    </AuthContext.Provider>
  );
};
