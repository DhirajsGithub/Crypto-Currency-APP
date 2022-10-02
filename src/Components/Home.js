import React, { Fragment, useContext } from 'react'
import AuthContext from '../Store/Api'
import { Coins } from './Coins/Coins'
import Header from './Header'
import Reload from './Reload'
import Slogan from './Slogan'
import Currency from './Currency'

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <Fragment >
        <Header />
        <Slogan />  
         <div style={{display:'flex', justifyContent:'space-between'}} >
           <Currency />
        {!ctx.loading && <Reload />}
        </div>
       
        <Coins /> 
     
    </Fragment>
  )
}

export default Home