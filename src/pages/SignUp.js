import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { SignUpStyled } from "../component/SignUpStyled";

const SignUp = () => {
  return (
    <SignUpStyled>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="../images/logo.png"
              width="170 px"
              height="50"
              className="d-inline-block align-content-around"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-3 mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="login" to="/LoginPage">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-3 mb-md-0">
                <li className="nav-item">
                <Link className="cart" to="/Cart">
                  <button className="btn btn-primary" type="submit">
                    Cart
                  </button>
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div className="wrapper">
        <div className="logo">
          <img src="../images/logo.png" alt="logo" />
        </div>
        <div className="text-center mt-4 name">Caesar</div>

        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="Name" id="Name" placeholder="Name" />
          </div>

          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <button className="btn mt-3">Sign Up</button>
        </form>
      </div>
    </SignUpStyled>
  );
};

export default SignUp;
