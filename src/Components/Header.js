import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import fetchCoinsList from "./CoinsList";
import classes from "./Header.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import ToggleBtn from "./ToggleBtn";
import AuthContext from "../Store/Api";
import { Link } from "react-router-dom";

// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// const light = { background: "lightGray" };
// const dark = { background: "black" };

function Header() {
  const ctx = useContext(AuthContext)
  const [search, setSearch] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [searchCoinList, setSearchCoinList] = useState([]);

  const [isdark, setDark] = useState(false);
  // const theme = isdark ? dark : light;
  // console.log("dark theme ", isdark)
  // console.log(ctx.darkTheme)

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
  const handleThemeOnChange = ()=>{
    setDark((prev) => !prev);
    ctx.handleTheme()
  }
  console.log("theme is dark ", ctx.isDark)

  return (
    <Navbar className={classes.navbar} variant={ctx.isDark ? 'dark' : 'light'} bg={ctx.isDark ? 'dark' : 'light'} expand="lg">
      <Container fluid>
        <Navbar.Brand className={classes.brand}>
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
         DMarket
        </Link>
      
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          <Link style={{ color: ctx.isDark ? "#fafafa" : "black" , textDecoration: "inherit" }} to="/coins">
            Coins
          </Link>
            {/* <Nav.Link href="/coins" className={classes.currency}>
              Coins
            </Nav.Link> */}
          </Nav>

          <div >
            <ToggleBtn  isDark={isdark}
          invertedIconLogic
          onChange={handleThemeOnChange} />
          </div>

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
                value={search}
                
              />
            </Form>
            menuVariant={ctx.isDark ? 'dark' : 'light'}
          >
            <div className={classes.dropdown}>
              {searchCoinList.map((item, index) => {
                return (
                  <NavDropdown.Item href={`/coins/${item.id}`} key={index}>
                  {item.name}
                  {/* <Link>
                  
                  </Link> */}
                    
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
