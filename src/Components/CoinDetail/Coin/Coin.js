import React, { useContext } from "react";
import classes from "./Coin.module.css";
import Badge from "react-bootstrap/Badge";
import { Figure } from "react-bootstrap";
import AuthContext from "../../../Store/Api";

const Coin = (props) => {
  const ctx = useContext(AuthContext);
  let currency = ctx.currency.name;
  let symbol = ctx.currency.symbol;
  const Intlfunc = (value) => {
    let obj2 = new Intl.NumberFormat("en-US");
    let output2 = obj2.format(value);
    if(output2 == 0){
      return value
    }
    return output2;
  };
  let currentPrice = Intlfunc(props.marketData?.current_price[currency]);
  let marketCap = Intlfunc(props.marketData?.market_cap[currency]);
  let circulatingSupply = Intlfunc(props.marketData?.circulating_supply);
  let total_supply = Intlfunc(props.marketData?.total_supply);
  let max_supply = Intlfunc(props.marketData?.max_supply);
  let fully_diluted_valuation = Intlfunc(
    props.marketData?.fully_diluted_valuation[currency]
  );
  let total_volume = Intlfunc(props.marketData?.total_volume[currency]);
  let high_24h = Intlfunc(props.marketData?.high_24h[currency]);
  let low_24h = Intlfunc(props.marketData?.low_24h[currency]);
  let change24 = props.marketData?.price_change_percentage_24h;
  change24 = Math.round(change24 * 10) / 10;
  let marketKapRank = props.rank;
  if (marketKapRank == null) {
    marketKapRank = "undefine";
  }

  return (
    <div className={classes.main}>
      <Badge bg="secondary">Rank # {marketKapRank}</Badge>
      <br />
      <Figure>
        <Figure.Image
          width={35}
          height={35}
          alt="171x180"
          src={props.image?.large}
        />
      </Figure>
      <div className={classes.heading}>
        <h2 className={classes.coinName}>{props.name} </h2>
        <h4 className={classes.symbol}>({props.symbol?.toUpperCase()})</h4>
      </div>
      <div className={classes.price}>
        <h3>
          {symbol} {currentPrice}
        </h3>{" "}
        &nbsp; &nbsp;
        {change24 >= 0 && (
          <h3 style={{ color: "green" }}>{change24}% &#8679;</h3>
        )}
        {change24 < 0 && <h3 style={{ color: "red" }}>{change24}% &#8681;</h3>}
      </div>

      <div className={classes.coinNumbers}>
        <p>
          Market Cap:{" "}
          <span>
            {symbol} {marketCap}
          </span>{" "}
        </p>{" "}
        &nbsp; &nbsp;
        <p>
          Circulating Supply: <span>$ {circulatingSupply}</span>
        </p>
      </div>
      <div className={classes.coinNumbers}>
        <p>
          24H Trading Vol: <span>$ {total_supply}</span>{" "}
        </p>{" "}
        &nbsp; &nbsp;
        <p>
          Total Supply: <span>$ {total_supply}</span>
        </p>
      </div>
      <div className={classes.coinNumbers}>
        <p>
          Fully Diluted Valuation:{" "}
          <span>
            {symbol} {fully_diluted_valuation}
          </span>{" "}
        </p>{" "}
        &nbsp; &nbsp;
        <p>
          Max Supply: <span>$ {max_supply}</span>
        </p>
      </div>
      <div className={classes.coinNumbers}>
        <p>
          Total Volume:{" "}
          <span>
            {symbol} {total_volume}
          </span>{" "}
        </p>{" "}
        &nbsp; &nbsp;
      </div>
      <div className={classes.coinNumbers}>
        <p>
          High 24H:{" "}
          <span>
            {symbol} {high_24h}
          </span>{" "}
        </p>{" "}
        &nbsp; &nbsp;
        <p>
          Low 24H:{" "}
          <span>
            {symbol} {low_24h}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Coin;
