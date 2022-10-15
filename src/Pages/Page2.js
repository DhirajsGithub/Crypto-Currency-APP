import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CoinDetail from '../Components/CoinDetail'
import Footer from '../Components/Footer';
import AuthContext from '../Store/Api';

const Page2 = () => {
  const param = useParams();
  const ctx = useContext(AuthContext);
  
  useEffect(() => {
    ctx.coinIdHandler(param.coinId)
    
  }, [param.coinId])
  
 
  return (
    <>
      <CoinDetail />
      <Footer />
    </>
    
  )
}

export default Page2