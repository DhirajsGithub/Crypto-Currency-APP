import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CoinDetail from '../Components/CoinDetail'
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
    </>
    
  )
}

export default Page2