import React, { Fragment, useContext } from 'react'
import AuthContext from '../Store/Api'
import Landing from './CoinDetail/Landing'
import Loading from './Coins/Loading'
import Header from './Header'
import Slogan from './Slogan'

const CoinDetail = () => {
  const ctx = useContext(AuthContext)
  console.log(ctx.coinData)
  return (
    <Fragment>
      <Header  />
      {ctx.loading2 && <Loading />}
      {!ctx.loading2 && <Landing />}
      
    </Fragment>
  )
}

export default CoinDetail