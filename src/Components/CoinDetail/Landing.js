import React, { useContext, useState } from "react";
import Slogan from "../Slogan";
import Coin from "./Coin/Coin";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthContext from "../../Store/Api";
import Info from "./Info/Info";
import Loading from "../Coins/Loading";

const Landing = (props) => {
  const ctx = useContext(AuthContext)
  const {name, image, market_cap_rank: rank,symbol, market_data, links  } = ctx.coinDetail;
     
  console.log(ctx.coinDetail)
  return (
    <div>
      <Slogan
        hh2={<h2>SOmething</h2>}
        hh3={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            provident.
          </p>
        }
        info={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            soluta minima accusantium nemo reiciendis laudantium, expedita illum
            possimus exercitationem tenetur?
          </p>
        }
        loading={ctx.loading2}
      />
    
      <Container>
       <Row>
          <Col sm={7}><Coin name={name} image={image} rank={rank} symbol={symbol} marketData={market_data} /></Col>
          <Col name={name} sm={5}><Info links={links}  /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
