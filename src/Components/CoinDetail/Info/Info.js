import React from 'react'
import { Button } from 'react-bootstrap'
import classes from  './Info.module.css'

const Info = () => {
  return (
    <div className={classes.main}>
    <div >
    <h3>Info</h3>
    <a target="_blank" href="https://www.aax.com/en-US/ad-sign-up/?utm_source=coingecko&utm_medium=button&utm_campaign=brand&utm_term=sep_buy_button&utm_content=trade_anywhere">
      <Button size='sm' variant="success">Buy/cell &#10095; </Button>
      </a>  
    <a target="_blank" href="https://www.kucoin.com/ucenter/signup?rcode=rJ2SDGL">
      <Button size='sm' variant="success">Earn Crypto &#10095;</Button>
    </a>
    </div>
   
    <div className={classes.info}>
      <span>Website</span>
      <div>
      <a href="https://www.bitcoin.org/" target="_blank"><Button size='sm' variant="secondary">bitcoin.org</Button></a>
      <a href="https://bitcoin.org/bitcoin.pdf" target="_blank"><Button size='sm' variant="secondary">whitepaper</Button></a>
      </div>   
    </div>
    <div className={classes.info}>
      <span>Explorers</span>
      <div>
      <a href="https://btc.com/" target="_blank"><Button size='sm' variant="secondary">btc</Button></a>
      <a href="https://btc.tokenview.io/" target="_blank"><Button size='sm' variant="secondary">Tokenview</Button></a>
      
      </div>   
    </div>
    <div className={classes.info}>
      <span>Wallets</span>
      <div >
      <a target="_blank" href="https://shop.ledger.com/pages/ledger-nano-x?utm_source=CoinGecko&utm_campaign=ADS-wallet&utm_medium=affiliate_button&r=bafa&0="><Button size='sm' variant="secondary">Leadger</Button></a>
      <a target="_blank" href="https://gcko.io/trezor"><Button size='sm' variant="secondary">Trezor</Button></a>
      <a target="_blank" href="https://electrum.org/#home"><Button size='sm' variant="secondary">Electrum</Button></a>
      <a target="_blank" href="https://shop.ledger.com/pages/ledger-nano-x?utm_source=CoinGecko&utm_campaign=ADS-wallet&utm_medium=affiliate_button&r=bafa&0="><Button size='sm' variant="secondary">Xdefi</Button></a>
      <a target="_blank" href="https://shop.ledger.com/pages/ledger-nano-x?utm_source=CoinGecko&utm_campaign=ADS-wallet&utm_medium=affiliate_button&r=bafa&0="><Button size='sm' variant="secondary">Trust Wallet</Button></a>
      </div>   
    </div>
    <div className={classes.info}>
      <span>Website</span>
      <div>
      <Button size='sm' variant="secondary">bitcoin.org</Button>
      <Button size='sm' variant="secondary">whitepaper</Button>
      </div>   
    </div>
    <div className={classes.info}>
      <span>Website</span>
      <div>
      <Button size='sm' variant="secondary">bitcoin.org</Button>
      <Button size='sm' variant="secondary">whitepaper</Button>
      </div>   
    </div>
    <div className={classes.info}>
      <span>Website</span>
      <div>
      <Button size='sm' variant="secondary">bitcoin.org</Button>
      <Button size='sm' variant="secondary">whitepaper</Button>
      </div>   
    </div>
    </div>
  )
}

export default Info