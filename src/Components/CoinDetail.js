import React, { Fragment, useContext } from 'react'
import AuthContext from '../Store/Api'
import Header from './Header'
import Slogan from './Slogan'

const CoinDetail = () => {
  const ctx = useContext(AuthContext)
  console.log(ctx.coinData)
  return (
    <Fragment>
      <Header  />
      <Slogan hh2={<h2>SOmething</h2>} hh3={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, provident.</p>} info={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta minima accusantium nemo reiciendis laudantium, expedita illum possimus exercitationem tenetur?</p>} loading = {ctx.loading2} />
    </Fragment>
  )
}

export default CoinDetail