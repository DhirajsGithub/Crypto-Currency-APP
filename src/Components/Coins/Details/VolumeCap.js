import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export const VolumeCap = (props) => {
  let obj2 = new Intl.NumberFormat('en-US');  
  let output2 = obj2.format(props.volume);  
  return (
    <td>${output2}</td>
  )
}
