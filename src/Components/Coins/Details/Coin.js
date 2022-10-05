import React, { useContext } from "react";
import classes from "./Coin.module.css";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";
import AuthContext from "../../../Store/Api";

const Coin = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <td onClick={()=>{ctx.coinIdHandler(props.id)}} className={classes.coin}>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/coins/${props.id}`}
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
