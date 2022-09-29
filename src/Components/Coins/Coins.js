import React, { Fragment, useContext } from "react";
import Table from "react-bootstrap/Table";
import Heading from "./Heading/Heading";
import Row from "./Row/Row";
import classes from "./Coins.module.css";

import AuthContext from "../../Store/Api";
import Loading from "./Loading";

export const Coins = () => {

  const ctx = useContext(AuthContext)
  console.log(ctx.cryptoData)
  console.log(ctx.loading)

  return (
  <Fragment>
    {ctx.loading && <Loading />}
      <Table className={classes.coins} striped hover variant="light" responsive>
        <thead>
          <Heading />
        </thead>
        <tbody>
        {ctx.cryptoData.map((coin)=>{
          return(
            <Row key={coin.id} coinInfo={coin}  />
          )
        })}
        </tbody>
      </Table>
</Fragment>
  );
};
