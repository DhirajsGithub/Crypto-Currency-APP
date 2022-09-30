import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../../Store/Api';

const Price = (props) => {

  let obj2 = new Intl.NumberFormat('en-US');  
  let output2 = obj2.format(props.price);  

  return (
    <td>${output2}</td>
  )
}

export default Price