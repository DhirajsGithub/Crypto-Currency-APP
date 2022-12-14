import React, { useContext, useState } from "react";
import Slogan from "../Slogan";
import Coin from "./Coin/Coin";
import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthContext from "../../Store/Api";
import Info from "./Info/Info";
import Currency from "../../Components/Currency";
import Reload from "../Reload";
import Accordion from "react-bootstrap/Accordion";
import Loading from "../Coins/Loading";

const Landing = (props) => {
  const ctx = useContext(AuthContext);
  const {
    name,
    image,
    market_cap_rank: rank,
    symbol,
    market_data,
    links,
  } = ctx.coinDetail;

  let priceChangePer = [
    {
      ch: ctx.coinDetail.market_data?.price_change_percentage_24h,
      name: "24h",
    },
    { ch: ctx.coinDetail.market_data?.price_change_percentage_7d, name: "7d" },
    {
      ch: ctx.coinDetail.market_data?.price_change_percentage_14d,
      name: "14d",
    },
    {
      ch: ctx.coinDetail.market_data?.price_change_percentage_30d,
      name: "30d",
    },
    {
      ch: ctx.coinDetail.market_data?.price_change_percentage_60d,
      name: "60d",
    },
    {
      ch: ctx.coinDetail.market_data?.price_change_percentage_200d,
      name: "200d",
    },
    { ch: ctx.coinDetail.market_data?.price_change_percentage_1y, name: "1y" },
  ];

  return (
    <div>
      <Slogan
        hh2={<h2>{name}</h2>}
        hh3={
          <p>
            Cryptocurrency Is Rolling 😎, The Others Are Stoned.
          </p>
        }
        info={
          <p style={{ padding: "0 10px" }}>
            Investing in crypto assets is risky, but can be a good investment if
            you do it properly and as part of a diversified portfolio.
            Cryptocurrency is a good investment if you want to gain direct
            exposure to the demand for digital currency.
          </p>
        }
        loading={ctx.loading}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Currency />
        {!ctx.loading && <Reload />}
      </div>
      {ctx.loading && <Loading />}
      <br />
      <Container>
        <Row>
          <Col sm={7}>
            <Coin
              name={name}
              image={image}
              rank={rank}
              symbol={symbol}
              marketData={market_data}
            />
          </Col>
          <Col name={name} sm={5}>
            <Info links={links} />
          </Col>
        </Row>
        <br />
        <Row style={{ margin: "0 auto" }}>
          <h4>Price Change percentage</h4>
          {["sm"].map((breakpoint) => (
            <ListGroup bg="dark" key={breakpoint} horizontal={breakpoint}>
              {priceChangePer.map((item, index) => {
                return (
                  <ListGroup.Item
                    variant={`${ctx.isDark && "dark"}`}
                    key={index}
                  >
                    {" "}
                    {item.name} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <span style={{ color: item.ch > 0 ? "green" : "#FF7F7F" }}>
                      {item.ch} %
                    </span>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          ))}
        </Row>
        <br />
        <Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>About {ctx.coinId}</Accordion.Header>
              <Accordion.Body>{ctx.coinDetail?.description?.en}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
