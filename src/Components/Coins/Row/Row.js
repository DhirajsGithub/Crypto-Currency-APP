import React from "react";
import Coin from "../Details/Coin";
import Price from "../Details/Price";
import Time from "../Details/Time";
import { VolumeCap } from "../Details/VolumeCap";

const Row = (props) => {
  const {id, symbol, name, image, current_price:price, price_change_percentage_24h: change24h, market_cap, market_cap_rank, total_volume: totalVolume   } = props.coinInfo;
  return (
    <tr>
      <td>{market_cap_rank}</td>
      <Coin name={name} symbol={symbol} image={image} />
      <Price price ={price}/>
      <Time change24h={change24h} />
      <Time change24h={change24h} />
      <Time change24h={change24h} />
      <VolumeCap totalVolume={totalVolume} />
      <VolumeCap totalVolume={totalVolume}/>
      {/* {Array.from({ length: 7 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))} */}
    </tr>
  );
};

export default Row;
