import React from "react";
import Nav from "./Nav";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo LC CV" />
      <Nav />
    </header>
  );
};

export default Header;
