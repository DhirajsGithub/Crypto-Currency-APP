// import React, { useState, useEffect } from "react";

// const AuthContext2 = React.createContext({
// //   currency: { name: "usd", symbol: "$" },
//   coinId: "bitcoin",
//   coinData: [],
//   loading2: false,

// //   handleCurrency: (currency) => {},
//   handleCoinId: (coinId) => {},
// });
// export default AuthContext2;

// export const AuthContextProvider2 = (props) => {
// //   const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });
//   const [coinId, setCoindId] = useState("bitcoin");
//   const [coindDetail, setCoinDetail] = useState([]);
//   const [loading2, setLoading2] = useState(false);


//   const handleCoinId = (coinId)=>{
//     setCurrency(coinId);
//   }

//   const fetchCoinData = async function () {
//     setLoading2(true)
//     const response = await fetch(
//       "https://api.coingecko.com/api/v3/coins/" + coinId
//     );
//     if (!response.ok) {
//       throw new Error(
//         "Response is not ok from Api2 fetching coin detail adhere"
//       );
//     }
//     setLoading2(false);
//     const data = await response.json();
//     setCoinDetail(data);
//   };

//   useEffect(() => {
//     try {
//         fetchCoinData();
//     } catch (error) {
//         alert(error)
//     }
//   }, [fetchCoinData, coinId]);

//   return (
//     <AuthContext2.Provider value={{ coinId, coindDetail, loading2, handleCoinId, handleCurrency,}}></AuthContext2.Provider>
//   )

// };
