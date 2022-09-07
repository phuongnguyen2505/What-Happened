import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="logo">
          <a href={"/index"}>
            <img src={require("../asset/picture/logo.png")} alt="" />
          </a>
        </div>
        <nav>
          <a href="/#">introduction</a>
          <a href="/#">solution</a>
          <a href="/#">rate plan</a>
          <a href="/#" className="login">
            Login
          </a>
          <a href="/#">apply for free use</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
