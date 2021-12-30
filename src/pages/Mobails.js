import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { MobailsStyled } from "../component/MobailsStyled";

const Mobails = () => {
  return (
    <MobailsStyled>
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

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Moblies page</h1>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/Apple iPhone 13 Pro Max.png"
                  alt="Stickman"
                  width="100%"
                  height="100%"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>IPhone 13 Pro Max</b>
                    </h5>
                    Display Size In Inches: 6.7 inches <br />
                    Processor CPU: Hexa-core
                    <br />
                    Internal Memory Capacity In GB: 256 GB
                    <br />
                    Memory RAM In GB: 6 GB
                    <br />
                    Rear Camera: 12MP+12MP+12MP+TOF3D
                    <br />
                    Front Camera: 12 MP + SL 3D
                    <br />
                    Battery: 4352 mAh
                    <br />
                    Color: Gold
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b>EGP 26,499.00</b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/Apple iPhone 12 Pro Max.png"
                  alt="Stickman"
                  width="92%"
                  height="92%"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>IPhone 12 Pro Max</b>
                    </h5>
                    Display Size In Inches: 6.7 inches <br />
                    Processor CPU: Hexa-core
                    <br />
                    Internal Memory Capacity In GB: 256 GB
                    <br />
                    Memory RAM In GB: 6 GB
                    <br />
                    Rear Camera: 12MP+12MP+12MP
                    <br />
                    Front Camera: 12 MP + SL 3D
                    <br />
                    Battery: 4352 mAh <br />
                    Color: Pacific Blue
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      {" "}
                      <b>EGP 23,250.00</b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/20 ultra.png"
                  alt="Stickman"
                  width="108%"
                  height="108%"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>Samsung Galaxy Note20 Ultra</b>
                    </h5>
                    Display Size In Inches: 6.9 inches <br />
                    Processor CPU: Octa-core
                    <br />
                    Internal Memory Capacity In GB: 256 GB
                    <br />
                    Memory RAM In GB: 8 GB
                    <br />
                    Rear Camera: 108MP+12MP+12MP
                    <br />
                    Front Camera: 10 MP
                    <br />
                    Battery: 4500 mAh battery <br />
                    colors:Mystic White
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b>EGP 18,499.00</b>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/s21 ultra.png"
                  alt="Stickman"
                  width="98%"
                  height="98%"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>Samsung Galaxy S21 Ultra 5G</b>
                    </h5>
                    Display Size In Inches: 6.8 inches <br />
                    Processor CPU: Octa-core
                    <br />
                    Internal Memory Capacity In GB: 256 GB
                    <br />
                    Memory RAM In GB: 12 GB
                    <br />
                    Rear Camera: 108MP+10MP+10MP+12MP
                    <br />
                    Front Camera: 40 MP
                    <br />
                    Battery: 4500 mAh battery
                    <br />
                    Color: Phantom Black
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b>EGP 21,999.00</b>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/OPPO Reno6.png"
                  alt="Stickman"
                  width="100%"
                  height="100%"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>Oppo Reno6</b>
                    </h5>
                    Display Size In Inches: 6.4 inches <br />
                    Processor CPU: Octa-core
                    <br />
                    Internal Memory Capacity In GB: 128 GB
                    <br />
                    Memory RAM In GB: 8 GB
                    <br />
                    Rear Camera: 64MP+8MP+2MP+2MP
                    <br />
                    Front Camera: 44 MP
                    <br />
                    colors:Aurora
                    <br />
                    Battery: 4310 mAh
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b> EGP 6,485.00</b>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/relme8.png"
                  alt="Stickman"
                  width="112%"
                  height="112%"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>Realme 8</b>
                    </h5>
                    Display Size In Inches: 6.4 inches <br />
                    Processor CPU: Octa-core
                    <br />
                    Internal Memory Capacity In GB: 128 GB
                    <br />
                    Memory RAM In GB: 8 GB
                    <br />
                    Rear Camera: 64MP+8MP+2MP+2MP
                    <br />
                    Front Camera: 16 MP
                    <br />
                    Battery: 5000 mAh
                    <br />
                    Color: Cyber Black
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b>EGP 5,690.00</b>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/MI 11 T.png"
                  alt="Stickman"
                  width="100%"
                  height="100%"
                />

                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>MI 11 T</b>
                    </h5>
                    Display Size In Inches: 6.67 inches
                    <br />
                    Processor CPU: Octa-core
                    <br />
                    Internal Memory Capacity In GB: 256 GB
                    <br />
                    Memory RAM In GB: 8 GB
                    <br />
                    Rear Camera: 108MP+8MP+5MP
                    <br />
                    Front Camera: 16 MP
                    <br />
                    Battery: 5000 mAh
                    <br />
                    Color: Cerestial Blue
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b>EGP 8,180.00</b>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/Xiaomi Redmi Note 10 Pro.png"
                  alt="Stickman"
                  width="103%"
                  height="103%"
                />
                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>Xiaomi Redmi Note 10 Pro</b>
                    </h5>
                    Display Size In Inches: 6.67 inches <br />
                    Processor CPU: Octa-core
                    <br />
                    Internal Memory Capacity In GB: 128 GB
                    <br />
                    Memory RAM In GB: 8 GB
                    <br />
                    Rear Camera: 108MP+8MP+5MP+2MP
                    <br />
                    Front Camera: 16 MP
                    <br />
                    Battery: 4500 mAh
                    <br />
                    Color: Onyx Gray
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b>EGP 5,649.00</b>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="../images/Honor 50.png"
                  alt="Stickman"
                  width="95%"
                  height="95%"
                />

                <div className="card-body">
                  <p className="card-text">
                    <h5>
                      <b>Honor 50</b>
                    </h5>
                    Display Size In Inches: 6.57 inches <br />
                    Processor CPU: Octa-core
                    <br />
                    Internal Memory Capacity In GB: 256 GB
                    <br />
                    Memory RAM In GB: 8 GB
                    <br />
                    Rear Camera: 108MP+8MP+2MP+2MP
                    <br />
                    Front Camera: 32 MP
                    <br />
                    Battery: 4300 mAh
                    <br />
                    Color: Emerald Green
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <h5>
                      <b>EGP 9,830.00</b>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobailsStyled>
  );
};

export default Mobails;
