import React from "react";

const Time = (props) => {
  let change24 = props.change24h;
  change24 = Math.round(change24 * 10) / 10;

  return (
    <>
      {change24 >= 0 && <td style={{ color: "green" }}>{change24}% &#8679;</td>}
      {change24 < 0 && <td style={{ color: "red" }}>{change24}% &#8681;</td>}
    </>
  );
};

export default Time;
