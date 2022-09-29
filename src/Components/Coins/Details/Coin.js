import React from 'react'
import classes from './Coin.module.css'
import Figure from 'react-bootstrap/Figure';


const Coin = (props) => {
  return (
    <td className={classes.coin}>
    <Figure>
      <Figure.Image
        width={20}
        height={20}
        alt="171x180"
        src={props.image}
      />
    </Figure>
    <span className={classes.name}>{props.name}</span> <span>{props.symbol}</span>
    </td>
  )
}

export default Coin