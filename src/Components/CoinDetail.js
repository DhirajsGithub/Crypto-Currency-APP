import React, { Fragment, useContext } from 'react'
import AuthContext from '../Store/Api'
import Landing from './CoinDetail/Landing'
import Header from './Header'
import Slogan from './Slogan'

const CoinDetail = () => {
  const ctx = useContext(AuthContext)
  console.log(ctx.coinData)
  return (
    <Fragment>
      <Header  />
      <Landing />
    </Fragment>
  )
}

export default CoinDetail