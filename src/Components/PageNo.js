import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Link } from "react-router-dom";
import AuthContext from "../Store/Api";
import classes from "./PageNo.module.css";

function PageNo(props) {
  const ctx = useContext(AuthContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let pageNo = event.target.jumpToNo.value;
    if (!pageNo) {
      pageNo = 1;
    }
    ctx.handlePageNo(pageNo);
    event.target.jumpToNo.value = "";
  };
  return (
    <ButtonToolbar
      className={`justify-content-center paginationBtn`}
      aria-label="Toolbar with button groups"
    >
      <ButtonGroup className="me-2" aria-label="First group">
        <Button
          onClick={() => {
            props.scrollUp();
            ctx.pageNo > 1 && ctx.handlePageNo(ctx.pageNo - 1);
          }}
        >
          &#8678; Prev
        </Button>
      </ButtonGroup>
      <ButtonGroup className="ms-2" aria-label="Third group">
        <Button
          onClick={() => {
            props.scrollUp();
            ctx.pageNo < 133 && ctx.handlePageNo(ctx.pageNo + 1);
          }}
        >
          Next &#8680;
        </Button>
      </ButtonGroup>
      <form onSubmit={handleOnSubmit} className={classes.jumpTo}>
        <input
          type="number"
          max={132}
          min={1}
          name="jumpToNo"
          placeholder={`${ctx.pageNo}/132`}
          id="pageNo"
        />

        <Button disabled={ctx.loading} type="submit" size="sm" htmlFor="pageNo">
          Jump&laquo;&raquo;{" "}
        </Button>
      </form>
    </ButtonToolbar>
  );
}

export default PageNo;
