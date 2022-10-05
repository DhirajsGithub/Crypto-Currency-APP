import React, { useContext, useState } from "react";
import Slogan from "../Slogan";
import Coin from "./Coin/Coin";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthContext from "../../Store/Api";
import Info from "./Info/Info";
import Loading from "../Coins/Loading";

const Landing = () => {
  const ctx = useContext(AuthContext)
  const[coinDetail, setCoinDetail] = useState([]);
  const {name, image, market_cap_rank: rank,symbol, market_data  } = ctx.coinDetail;
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
      {ctx.loading2 && <Loading />}
      <Container>
        {!ctx.loading2 && <Row>
          <Col sm={6}><Coin name={name} image={image} rank={rank} symbol={symbol} marketData={market_data} /></Col>
          <Col sm={6}><Info /></Col>
        </Row>}
      </Container>
    </div>
  );
};

export default Landing;
