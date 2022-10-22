import React, { useContext } from "react";
import AuthContext from "../../../Store/Api";

const Price = (props) => {
  const ctx = useContext(AuthContext);

  let obj2 = new Intl.NumberFormat("en-US");
  let output2 = obj2.format(props.price);

  return (
    <td>
      {ctx.currency.symbol} {output2}
    </td>
  );
};

export default Price;
