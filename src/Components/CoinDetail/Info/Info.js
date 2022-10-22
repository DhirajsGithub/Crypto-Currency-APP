import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Info.module.css";

const Info = (props) => {
  function extractDomain(url) {
    var domain;
    if (url.indexOf("://") > -1) {
      domain = url.split("/")[2];
    } else {
      domain = url.split("/")[0];
    }
    return domain;
  }
  function extractAfterslash(url) {
    let l = url.lastIndexOf("/");
    let ans;
    ans = url.slice(l + 1);
    return ans;
  }

  return (
    <div className={classes.main}>
      <div>
        <h3>Info</h3>
        <h3>{props.name}</h3>
        <a
          target="_blank"
          href="https://www.aax.com/en-US/ad-sign-up/?utm_source=coingecko&utm_medium=button&utm_campaign=brand&utm_term=sep_buy_button&utm_content=trade_anywhere"
        >
          <Button size="sm" variant="success">
            Buy/cell &#10095;{" "}
          </Button>
        </a>
        <a
          target="_blank"
          href="https://www.kucoin.com/ucenter/signup?rcode=rJ2SDGL"
        >
          <Button size="sm" variant="success">
            Earn Crypto &#10095;
          </Button>
        </a>
      </div>

      {props.links?.homepage.length > 0 && (
        <div className={classes.info}>
          <span>Website</span>
          <div>
            {props.links.homepage.map((site, index) => {
              if (site !== null && site.length >1) {
                return (
                  <a href={site} key={index} target="_blank">
                    <Button size="sm" variant="secondary">
                      {extractDomain(site)}
                    </Button>
                  </a>
                );
              }
            })}
          </div>
        </div>
      )}
      {props.links?.blockchain_site.length > 0 && (
        <div className={classes.info}>
          <span>Blogchain site</span>
          <div>

            {props.links.blockchain_site.map((site, index) => {
              if (site !== null && site.length >1) {
                return (
                  <a href={site} key={index} target="_blank">
                    <Button size="sm" variant="secondary">
                      {extractDomain(site)}
                    </Button>
                  </a>
                );
              }
            })}
          </div>
        </div>
      )}

      {props.links?.repos_url.github.length > 0 && (
        <div className={classes.info}>
          <span>Repos url</span>
          <div>
            {props.links.repos_url.github.map((site, index) => {
              if (site !== null && site.length >1) {
                return (
                  <a href={site} key={index} target="_blank">
                    <Button size="sm" variant="secondary">
                      {extractAfterslash(site)}
                    </Button>
                  </a>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
