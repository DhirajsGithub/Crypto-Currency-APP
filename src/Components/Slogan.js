import React, { useState, useEffect, useContext, Fragment } from "react";
import AuthContext from "../Store/Api";
import classes from './Reload.module.css'

const Slogan = () => {
  const ctx = useContext(AuthContext)
  const [status, setStatus] = useState("To the Earth!")
  const fetchNwStatus = async()=>{
    const response = await fetch("https://api.coingecko.com/api/v3/ping")
    if(!response.ok){
     throw new Error("error occurred")
    
    } 
    let data = await response.json();
    data = data.gecko_says;
    data = data.slice(5)
    setStatus(data);
    console.log(data)
 }
  useEffect(() => {
    try {
      fetchNwStatus()
    } catch (error) {
     alert(error)
    }
   
    
  }, [fetchNwStatus])
  
  return (
    <Fragment>
    <div className={classes.slogan} style={{margin: "0 1rem", display:'flex', justifyContent:'space-between' }}>
    <div>
      <h2>Explore </h2>
      <h3>Cryptocurrency Data by DMarket</h3>
    </div>
    <div className={classes.status}>
    
      <p><i style={{color: ctx.loading ? 'red' : 'green'}} className="fa-solid fa-signal"></i> &nbsp; {ctx.loading ? "To the Earth!" :  status}</p>
    </div>

    </div>
    <p style={{marginLeft: "1rem"}}>Get Details of more than <mark style={{backgroundColor:" #FFFF00", fontWeight: 'bold'}}>13K +</mark> coins</p>
</Fragment>
  );
};

export default Slogan;
