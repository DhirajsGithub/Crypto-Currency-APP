import React, {
  useContext,
} from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import AuthContext from "../Store/Api";
import classes from './PageNo.module.css'

function PageNo(props) {
  const ctx = useContext(AuthContext);
  const handleOnSubmit =(event)=>{
    let pageNo = event.target.jumpToNo.value;
    event.preventDefault();
    if(!pageNo){
      pageNo = 1;
    }
    ctx.handlePageNo(pageNo)
    event.target.jumpToNo.value = "";
  }
  return (
    <ButtonToolbar
      className={`justify-content-center paginationBtn`}
      aria-label="Toolbar with button groups"
    >
      <ButtonGroup className="me-2" aria-label="First group">
        <Button
          onClick={() => {
            props.scrollUp();
            ctx.pageNo > 1 && ctx.handlePageNo( ctx.pageNo -1)
            // handlePagination();
          }}
        >
          &#8678; Prev
        </Button>
      </ButtonGroup>
      <ButtonGroup className="ms-2" aria-label="Third group">
        <Button
          onClick={() => {
            props.scrollUp();
            ctx.pageNo < 131 && ctx.handlePageNo( ctx.pageNo +1)
            // handlePagination();
          }}
        >
          Next &#8680;
        </Button>
      </ButtonGroup>
      <form onSubmit={handleOnSubmit} className={classes.jumpTo}>
      <input type="text" name="jumpToNo" placeholder={`${ctx.pageNo}/132`} id="pageNo" />
      <Button disabled={ctx.loading} type="submit" size="sm" htmlFor="pageNo" >Jump&laquo;&raquo; </Button>
      </form>
    </ButtonToolbar>
  );
}

export default PageNo;
