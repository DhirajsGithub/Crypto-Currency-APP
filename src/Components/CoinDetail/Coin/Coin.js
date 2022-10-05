import React from 'react'
import classes from './Coin.module.css'
import Badge from 'react-bootstrap/Badge';
import { Figure } from 'react-bootstrap';


const Coin = (props) => {
  const Intlfunc = (value)=>{
    let obj2 = new Intl.NumberFormat('en-US');  
    let output2 = obj2.format(value); 
    return output2;
  }
  let currentPrice = Intlfunc(props.marketData?.current_price.usd);
  let marketCap = Intlfunc(props.marketData?.market_cap.usd)
  let circulatingSupply = Intlfunc(props.marketData?.circulating_supply)
  let total_supply  = Intlfunc(props.marketData?.total_supply)
  let max_supply = Intlfunc(props.marketData?.max_supply)
  let fully_diluted_valuation = Intlfunc(props.marketData?.fully_diluted_valuation.usd)
  let total_volume = Intlfunc(props.marketData?.total_volume.usd)

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
        <h3>$ {currentPrice}</h3> &nbsp; &nbsp;

        {change24 >=0 && <h3 style={ {color:'green'}}>{change24}%	&#8679;</h3>}
      {change24 <0 && <h3 style={ {color:'red'}}>{change24}% &#8681;</h3>}
  
      </div>

      <div className={classes.coinNumbers}>
        <p>Market Cap <span>$ {marketCap}</span> </p> &nbsp; &nbsp; 
        <p>Circulating Supply <span>$ {circulatingSupply}</span></p>
      </div>
      <div className={classes.coinNumbers}>
        <p>24H Trading Vol <span>$ {total_supply}</span> </p> &nbsp; &nbsp; 
        <p>Total Supply <span>$ {total_supply}</span></p>
      </div>
      <div className={classes.coinNumbers}>
        <p>Fully Diluted Valuation <span>$ {fully_diluted_valuation}</span> </p> &nbsp; &nbsp; 
        <p>Max Supply  <span>$ {max_supply}</span></p>
      </div>
      
     
    </div>
  )
}

export default Coin