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
import { Link, NavLink } from "react-router-dom";


function Header() {
  const ctx = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [coinList, setCoinList] = useState([]);

  const [isdark, setDark] = useState(true);

  const handleOnChange = (event) => {
    setSearch(event.target.value);
    searchCoinss();
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
    setCoinList(newCoinList);
  };
  const handleThemeOnChange = () => {
    setDark((prev) => !prev);
    ctx.handleTheme(isdark);
  };

  return (
    <Navbar
      className={classes.navbar}
      variant={ctx.isDark ? "dark" : "light"}
      bg={ctx.isDark ? "dark" : "light"}
      expand="lg"
    >
      <Container fluid>
      
        <Navbar.Brand className={classes.brand}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/"
          >
           <h1><i className="fa-brands fa-wolf-pack-battalion"></i>  DMarket</h1> 
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`me-auto my-2 my-lg-0 ${classes.subBrand}`}
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : ""
              }
              style={{
                color: ctx.isDark ? "#fafafa" : "black",
                textDecoration: "inherit",
              }}
              to="/coins"
            >
              Coins <i className="fa-solid fa-coins"></i>
            </NavLink>
          </Nav>

          <div>
            <ToggleBtn
              isDark={ctx.isDark}
              invertedIconLogic
              onChange={handleThemeOnChange}
            />
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
            menuVariant={ctx.isDark ? "dark" : "light"}
          >
            <div className={classes.dropdown}>
              {coinList.map((item, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to={`/coins/${item.id}`}
                    >
                      {item.name}
                    </Link>
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
