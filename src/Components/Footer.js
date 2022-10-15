import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={classes.main}>
      <Navbar expand="lg" variant="light" bg="light" className="justify-content-center">
        <div className={classes.content}>
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
