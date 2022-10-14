import React, { Fragment, useContext } from 'react'
import AuthContext from '../Store/Api'
import Landing from './CoinDetail/Landing'
import Loading from './Coins/Loading'
import Header from './Header'
import Slogan from './Slogan'

const CoinDetail = () => {
  const ctx = useContext(AuthContext)
  return (
    <Fragment>
      <Header  />
      {!ctx.loading && <Landing />}
      
    </Fragment>
  )
}

export default CoinDetail