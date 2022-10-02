import React, { Fragment, useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Heading from "./Heading/Heading";
import Row from "./Row/Row";
import classes from "./Coins.module.css";

import AuthContext from "../../Store/Api";
import Loading from "./Loading";

export const Coins = () => {
  const ctx = useContext(AuthContext);

  const [sortedCryptoData, setSortedCryptoData] = useState(ctx.cryptoData);
  const [sorted, setSorted] = useState(true);
  // console.log("reloading");
  console.log(ctx.loading)

  const sortData = (head) => {
    setSorted(false);

    const highToLow = ctx.cryptoData.sort((a, b) => {
      setSorted(true);
      switch (head) {
        case "#":
          console.log("#");
          if (sorted) {
            setSorted(false);

            return b.market_cap_rank - a.market_cap_rank;
          }
          return a.market_cap_rank - b.market_cap_rank;

        case "Coin":
          let x = a.name.toUpperCase(),
            y = b.name.toUpperCase();
          if (sorted) {
            setSorted(false);

            return x == y ? 0 : x > y ? 1 : -1;
          }
          return x == y ? 0 : x < y ? 1 : -1;
        case "price":
          if (sorted) {
            setSorted(false);

            return b.current_price - a.current_price;
          }
          return a.current_price - b.current_price;

        case "24h":
          if (sorted) {
            setSorted(false);

            return (
              b.price_change_percentage_24h - a.price_change_percentage_24h
            );
          }
          return a.price_change_percentage_24h - b.price_change_percentage_24h;

        case "high_24h":
          if (sorted) {
            setSorted(false);

            return b.high_24h - a.high_24h;
          }
          return a.high_24h - b.high_24h;

        case "low_24h":
          if (sorted) {
            setSorted(false);

            return b.low_24h - a.low_24h;
          }
          return a.low_24h - b.low_24h;

        case "24h Volume":
          if (sorted) {
            setSorted(false);

            return b.total_volume - a.total_volume;
          }
          return a.total_volume - b.total_volume;

        case "Mkt Cap":
          if (sorted) {
            setSorted(false);

            return b.market_cap - a.market_cap;
          }
          return a.market_cap - b.market_cap;
      }
    });

    setSortedCryptoData(highToLow);
  };

  return (
    <Fragment>
      {ctx.loading && <Loading />}
      <br />
      <Table className={classes.coins} striped hover variant="light" responsive>
        <thead>
          <Heading sortData={sortData} />
        </thead>
        <tbody>
          {sortedCryptoData.length > 0
            ? sortedCryptoData.map((coin) => {
                return <Row key={coin.id} coinInfo={coin} />;
              })
            : ctx.cryptoData.map((coin) => {
                return <Row key={coin.id} coinInfo={coin} />;
              })}
        </tbody>
      </Table>
    </Fragment>
  );
};
