import React from "react";
import classes from "./Coin.module.css";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";

const Coin = (props) => {
  return (
    <td className={classes.coin}>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/coin/${props.id}`}
      >
        <>
          <Figure>
            <Figure.Image
              width={20}
              height={20}
              alt="171x180"
              src={props.image}
            />
          </Figure>
          <span className={classes.name}>{props.name}</span>{" "}
          <span>{props.symbol}</span>
        </>
      </Link>
    </td>
  );
};

export default Coin;
