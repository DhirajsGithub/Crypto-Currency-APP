import React, { useContext } from "react";
import AuthContext from "../../../Store/Api";

export const VolumeCap = (props) => {
  const ctx = useContext(AuthContext);
  let obj2 = new Intl.NumberFormat("en-US");
  let output2 = obj2.format(props.volume);
  return (
    <td>
      {ctx.currency.symbol} {output2}
    </td>
  );
};
