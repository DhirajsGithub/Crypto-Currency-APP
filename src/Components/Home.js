import React, { Fragment, useContext } from 'react'
import AuthContext from '../Store/Api'
import { Coins } from './Coins/Coins'
import Currency from './Currency'
import Header from './Header'
import Reload from './Reload'
import Slogan from './Slogan'

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <Fragment >
        <Header />
        <Slogan />  
         {/* <Currency /> */}
         {!ctx.loading && <Reload />}
        <Coins /> 
     
    </Fragment>
  )
}

export default Home