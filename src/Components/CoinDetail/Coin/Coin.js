import React from 'react'
import classes from './Coin.module.css'
import Badge from 'react-bootstrap/Badge';
import { Figure } from 'react-bootstrap';


const Coin = (props) => {
  let obj2 = new Intl.NumberFormat('en-US');  
  let output2 = obj2.format(props.marketData?.current_price.usd);  

  let change24 = props.marketData?.price_change_percentage_24h;
  change24 = Math.round(change24 * 10) / 10;
  
  return (
    <div className={classes.main}>
      <Badge bg="secondary">Rank #{props.rank}</Badge>
      <br />
      <Figure>
            <Figure.Image
              width={30}
              height={30}
              alt="171x180"
              src={props.image?.large}
            />
      </Figure> 
      <div className={classes.heading}>
         <h2 className={classes.coinName}>{props.name} </h2>
      <h4 className={classes.symbol}>({props.symbol?.toUpperCase()})</h4>
      </div>
      <div className={classes.price}>
        <h3>${output2}</h3> &nbsp; &nbsp;

        {change24 >=0 && <h3 style={ {color:'green'}}>{change24}%	&#8679;</h3>}
      {change24 <0 && <h3 style={ {color:'red'}}>{change24}% &#8681;</h3>}
  
      </div>
     
    </div>
  )
}

export default Coin