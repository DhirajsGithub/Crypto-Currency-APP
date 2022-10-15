import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import fetchCoinsList from "./CoinsList";
import classes from "./Header.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Figure from "react-bootstrap/Figure";
import img from "../Store/D_Market-removebg-preview.png"

function Header() {
  const [search, setSearch] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [searchCoinList, setSearchCoinList] = useState([]);

  const handleOnChange = (event) => {
    setSearch(event.target.value);
    if (search.length > 0) {
      searchCoinss();
    } else {
      setSearchCoinList(coinList);
    }
  };
  useEffect(() => {
    fetchCoinsList().then((data) => {
      setCoinList(data);
    });
  }, []);

  const searchCoinss = () => {
    let newCoinList = coinList.filter((item) => {
      return item.name.toLowerCase().startsWith(search.toLowerCase());
    });
    setSearchCoinList(newCoinList);
    console.log(searchCoinList);
  };

  return (
    <Navbar className={classes.navbar} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className={classes.brand} href="/">
        DMarket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/coins" className={classes.currency}>
              Coins
            </Nav.Link>
          </Nav>

          <NavDropdown
          className={classes.main}
            id="nav-dropdown-light-example"
            title=<Form className="d-flex">
              <Form.Control
                onChange={handleOnChange}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            menuVariant="light"
          >
            <div className={classes.dropdown}>
              {searchCoinList.map((item, index) => {
                return (
                  <NavDropdown.Item href={`/coins/${item.id}`} key={index}>
                    {item.name}
                  </NavDropdown.Item>
                );
              })}
            </div>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
