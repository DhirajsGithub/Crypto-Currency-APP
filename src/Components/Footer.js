import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../Store/Api";
import classes from "./Footer.module.css";

const Footer = () => {
  const ctx = useContext(AuthContext)
  return (
    <Container fluid className={classes.main}>
      <Navbar expand="lg" variant={ctx.isDark ? 'dark' : 'light'} bg={ctx.isDark ? 'dark' : 'light'} className="justify-content-center">
        <div className={`${classes.content} ${ctx.isDark && classes.classLight}`}>
          <p>
            Made with 💙 by <span>D</span>{" "}
          </p>

          <p>
            {" "}
            <a style={{ color: "inherit", textDecoration: "inherit" }} target="_blank" href="https://www.instagram.com/_d.codes_/"><i className="fa-brands fa-instagram"></i></a> 
          </p>
        </div>
      </Navbar>
    </Container>
  );
};

export default Footer;
