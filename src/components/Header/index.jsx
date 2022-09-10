import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import CloseIcon from "@mui/icons-material/Close";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
          <a href="/#" className="apply">
            apply for free use
          </a>
        </nav>
        <input id="nav-input" class="nav-input" type="checkbox" />
        <label class="nav-mobile-btn" for="nav-input">
          <span></span>
        </label>
        <label for="nav-input" class="overlay"></label>
        <div class="nav-menu-mobile">
          <label for="nav-input" class="close">
            <CloseIcon />
          </label>
          <div className="login-mobile text">
            <AccountCircleIcon />
            <a href="/#">Login</a>
          </div>
          <ul className="nav-mobile text">
            <li className="item-mobile">
              <a href="/#">
                <ReviewsIcon />
                &nbsp; introduction
              </a>
            </li>
            <li className="item-mobile">
              <a href="/#">
                <svg
                  style={{ width: "20px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
                </svg>
                &nbsp; solution
              </a>
            </li>
            <li className="item-mobile">
              <a href="/#">
                <svg
                  style={{ width: "22px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                </svg>
                &nbsp; rate plan
              </a>
            </li>
            <li className="item-mobile">
              <a href="/#" className="circle-sketch-highlight">
                apply for free use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
