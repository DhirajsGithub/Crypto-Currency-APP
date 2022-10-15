import React, { useState, useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import AuthContext from "../Store/Api";
import classes from "./Currency.module.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className={classes.headingLink}
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const Currency = () => {
  const ctx = useContext(AuthContext);

  const currency = [
    { name: "usd", symbol: "$" },
    { name: "inr", symbol: "₹" },
    { name: "btc", symbol: "₿" },
    { name: "eth", symbol: "Ξ" },
    { name: "ars", symbol: "$" },
    { name: "aud", symbol: "$" },
    { name: "bmd", symbol: "$" },
    { name: "brl", symbol: "R$" },
    { name: "cad", symbol: "$" },
    { name: "clp", symbol: "$" },
    { name: "cny", symbol: "¥" },
    { name: "czk", symbol: "Kč" },
    { name: "dkk", symbol: "kr" },
    { name: "eur", symbol: "€" },
    { name: "hkd", symbol: "$" },
    { name: "huf", symbol: "Ft" },
    { name: "idr", symbol: "Rp" },
    { name: "ils", symbol: "₪" },
    { name: "jpy", symbol: "¥" },
    { name: "krw", symbol: "₩" },
    { name: "myr", symbol: "RM" },
    { name: "ars", symbol: "$" },
    { name: "aud", symbol: "$" },
    { name: "bmd", symbol: "$" },
    { name: "brl", symbol: "R$" },
    { name: "cad", symbol: "$" },
    { name: "clp", symbol: "$" },
    { name: "cny", symbol: "¥" },
    { name: "czk", symbol: "Kč" },
    { name: "dkk", symbol: "kr" },
    { name: "eur", symbol: "€" },
    { name: "hkd", symbol: "$" },
    { name: "huf", symbol: "Ft" },
    { name: "idr", symbol: "Rp" },
    { name: "ils", symbol: "₪" },
    { name: "inr", symbol: "₹" },
    { name: "jpy", symbol: "¥" },
    { name: "krw", symbol: "₩" },
    { name: "myr", symbol: "RM" },
    
  ];



  const ChangeCurrencyHandler = (item) => {
    ctx.handleCurrency(item);
    console.log(item);
  };

  return (
    <div className={classes.dropdown}>
      <Dropdown>
        <Dropdown.Toggle
          className={classes.heading}
          as={CustomToggle}
          id="dropdown-custom-dark-components"
        >
          {ctx.currency.name} ({ctx.currency.symbol})
        </Dropdown.Toggle>

        <Dropdown.Menu
          className={classes.dropdownSec}
          variant="light"
          as={CustomMenu}
        >
          {currency.map((item, index) => {
            return (
              <Dropdown.Item
                key={index}
                onClick={() => {
                  ChangeCurrencyHandler(item);
                }}
                eventKey={index + 1}
              >
                {item.name} &nbsp; &nbsp;  {item.symbol}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Currency;
