import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Link } from "react-router-dom";
import AuthContext from "../Store/Api";

function PageNo(props) {
  const ctx = useContext(AuthContext);
  const pageNoIs = Number(props.PageNo);
  const handlePagination = () => {
    console.log(props.pageNo);
    ctx.handlePageNo(props.pageNo);
  };

  const [active, setActive] = useState(1);
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Link
          style={{ textDecoration: "none", border: "none" }}
          onClick={() => {
            active > 1 && setActive(active - 1);
            handlePagination();
          }}
          to={`/page/${active - 1}`}
        >
          <Button>Prev</Button>
        </Link>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Link
          style={{ textDecoration: "none" }}
          onClick={() => {
            handlePagination();
            active - 10 > 0 && setActive(active - 10);
          }}
          to={`/page/${active}`}
        >
          <Button active>{active}</Button>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          onClick={() => {
            handlePagination();
            active - 20 > 0 && setActive(active - 20);
          }}
          to={`/page/${active + 1}`}
        >
          <Button>{active + 1}</Button>
        </Link>
        <Link>
          <Button>...</Button>
        </Link>

        <Link
          onClick={() => {
            active < 121 && setActive(active + 10);
            handlePagination();
          }}
          to={`/page/${active + 10}`}
        >
          <Button>{active + 10}</Button>
        </Link>
        <Link
          onClick={() => {
            active < 111 && setActive(active + 20);
            handlePagination();
          }}
          to={`/page/${active + 20}`}
        >
          <Button>{active + 20}</Button>
        </Link>
        <Link>
          <Button>...</Button>
        </Link>

        <Link
          onClick={() => {
            //  active <111 && setActive(active+20)
            handlePagination();
          }}
          to="/page/132"
        >
          <Button>132</Button>
        </Link>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Link
          onClick={() => {
            active < 110 && setActive(active + 1);
            handlePagination();
          }}
          to={`/page/${active}`}
        >
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default PageNo;
