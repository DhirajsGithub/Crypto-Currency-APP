import React from "react";
import classes from './Heading.module.css';

const Heading = (props) => {
    const header = ["#", "Coin", "price", "24h", "high_24h", "low_24h", "24h Volume", "Mkt Cap"]
    const handleOnClick =(item)=>{

      

      props.sortData(item);
    }
  return (
    <tr >
      {header.map((item, index) => (
        <th className={classes.heading} onClick={()=>{handleOnClick(item)}} key={index}>{item}</th>
      ))}
    </tr>
  );
};

export default Heading;
