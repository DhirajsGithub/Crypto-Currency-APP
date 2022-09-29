import React from "react";
import classes from './Heading.module.css';

const Heading = () => {
    const header = ["#", "Coin", "price", "1h", "24h", "7d", "24h Volume", "Mkt Cap"]
  return (
    <tr >
      {header.map((item, index) => (
        <th className={classes.heading} onClick={()=>{console.log(item)}} key={index}>{item}</th>
      ))}
    </tr>
  );
};

export default Heading;
