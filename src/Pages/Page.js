import React from 'react'
import { useParams } from 'react-router-dom';
import Home from '../Components/Home'
import PageNo from '../Components/PageNo';

const Page = () => {
    const params = useParams();
  
  return (
    <>
    <PageNo pageNo ={params.pageNo} />
      <Home />
    
    </>
    
  )
}

export default Page