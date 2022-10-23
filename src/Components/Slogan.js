import React, { useState, useEffect, Fragment } from "react";
import classes from "./Reload.module.css";

const Slogan = (props) => {
  const [status, setStatus] = useState("To the Earth!");
  const fetchNwStatus = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/ping");
    if (!response.ok) {
      throw new Error("error occurred");
    }
    let data = await response.json();
    data = data.gecko_says;
    data = data.slice(5);
    setStatus(data);
  };
  useEffect(() => {
    try {
      fetchNwStatus();
    } catch (error) {
      alert(error);
    }
  }, [fetchNwStatus]);

  return (
    <Fragment>
      <div
        className={classes.slogan}
        style={{
          margin: "0.5rem 1rem 0 1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          {props.hh2}
          {props.hh3}
        </div>
        <div className={classes.status}>
          <p>
            <i
              style={{ color: props.loading ? "red" : "green" }}
              className="fa-solid fa-signal"
            ></i>{" "}
            &nbsp; {props.loading ? "To the Earth!" : status}
          </p>
        </div>
      </div>
      {props.info}
    </Fragment>
  );
};

export default Slogan;
