import React, { Fragment, useContext } from "react";
import AuthContext from "../Store/Api";
import { Coins } from "./Coins/Coins";
import Reload from "./Reload";
import Slogan from "./Slogan";
import Currency from "./Currency";

const Home = () => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <Slogan
        hh2={<h2>Explore</h2>}
        hh3={<h3>Cryptocurrency Data by DMarket</h3>}
        loading={ctx.loading}
        info={
          <p style={{ marginLeft: "1rem" }}>
            Get Details of more than
            <mark style={{ backgroundColor: " #FFFF00", fontWeight: "bold" }}>
              13k +
            </mark>{" "}
            coins
          </p>
        }
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Currency />
        {!ctx.loading && <Reload />}
      </div>

      <Coins />
    </Fragment>
  );
};

export default Home;
