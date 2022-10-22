import React from "react";
import Coin from "../Details/Coin";
import Price from "../Details/Price";
import Time from "../Details/Time";
import { VolumeCap } from "../Details/VolumeCap";

const Row = (props) => {
  const {
    id,
    symbol,
    name,
    image,
    current_price: price,
    price_change_percentage_24h: change24h,
    high_24h,
    low_24h,
    market_cap_rank,
    market_cap: marketCap,
    total_volume: volume24h,
  } = props.coinInfo;
  return (
    <tr>
      <td>{market_cap_rank}</td>
      <Coin id={id} name={name} symbol={symbol} image={image} />
      <Price price={price} />
      <Time change24h={change24h} />
      <VolumeCap volume={high_24h} />
      <VolumeCap volume={low_24h} />
      <VolumeCap volume={volume24h} />
      <VolumeCap volume={marketCap} />
    </tr>
  );
};

export default Row;
