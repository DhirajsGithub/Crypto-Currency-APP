import React, { useContext } from "react";
import classes from "./Reload.module.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AuthContext from "../Store/Api";

const Reload = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.reload}>
      <div>
        <OverlayTrigger
          key={"left"}
          placement={"left"}
          overlay={
            <Tooltip id={`tooltip-left`}>
              <strong>Fetch Latest Data</strong>
            </Tooltip>
          }
        >
          <i
            onClick={() => {
              ctx.loadingHandler();
            }}
            id="tooltip"
            className="fa fa-refresh"
            aria-hidden="true"
          ></i>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default Reload;
