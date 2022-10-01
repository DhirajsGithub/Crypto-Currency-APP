import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Home from '../Components/Home'
import PageNo from '../Components/PageNo';
import AuthContext from '../Store/Api';

const Page = () => {
    const params = useParams();
    console.log(params.pageNo)
    const ctx = useContext(AuthContext);
    const handlePagination = ()=>{
      ctx.handlePageNo(params.pageNo)
    }
    
  return (
    <>
      <Home />
    <button onClick={handlePagination}>btn</button> 
    <PageNo />
    </>
    
  )
}

export default Page