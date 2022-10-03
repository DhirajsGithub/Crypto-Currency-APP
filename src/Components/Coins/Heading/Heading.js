import React, { useState } from "react";
import classes from './Heading.module.css';

const Heading = (props) => {
  const [onClickItem, setOnClickItem] = useState("");
  const {sorted : sor} = props;
    const header = ["#", "Coin", "price", "24h", "high_24h", "low_24h", "24h Volume", "Mkt Cap"]
    const handleOnClick =(item)=>{
      setOnClickItem(item);
      props.sortData(item);
    }
  return (
    <tr >
      {header.map((item, index) => (
        <th className={classes.heading} onClick={()=>{handleOnClick(item)}} key={index}>{item} {item == onClickItem && <span style={{fontWeight:'lighter', fontSize:'x-small'}}>{sor && sor!=null  && <span>&#x25B2;</span>}  {!sor && sor!=null && <span>&#x25BC;</span> }</span>} </th>
      ))}
    </tr>
  );
};

export default Heading;
