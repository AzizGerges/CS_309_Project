import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { HomePageStyled } from "../component/HomePageStyled";
// ../images/logo.jpg
const HomePage = () => {
  return (
    <HomePageStyled>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
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
              <ul className="navbar-nav me-auto mb-3 mb-md-0">
                <li className="nav-item">
                <Link className="admin" to="/Admin">
                  <button className="btn btn-primary" type="submit">
                    Admin
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

      <div
        id="myCarousel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/S1.png" className="d-block w-100" alt="..." />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>
                  Sign up today and <br /> get 50% discount.
                </h1>

                <p>
                  <Link className="btn btn-lg btn-primary" to="/SignUp">
                    SIGN UP
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/S2.png" className="d-block w-100" alt="..." />
            <div className="container">
              <div className="carousel-caption">
                <h1>
                  {" "}
                  Shop now and get ready <br /> for the new year.
                </h1>
                <p>
                  <Link className="btn btn-lg btn-primary" to="/Mobails">
                    SHOP NOW
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/S3.png" className="d-block w-100" alt="..." />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Reserve your first order now.</h1>
                <p>
                  <Link className="btn btn-lg btn-primary" to="/Laps">
                    SHOP NOW
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    

      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img src="../images/Clap.jpg" alt="Stickman" width="50%" height="30%" />
            <h2>Laptops</h2>
            <p>Click to see more products.</p>
            <p>
              <Link className="btn btn-outline-primary" to="/Laps">
                View details &raquo;
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <img src="../images/Cphons.jpg" alt="Stickman" width="50%" height="30%" />
            <h2>Mobiles</h2>
            <p>Click to see more products.</p>
            <p>
              <Link className="btn btn-outline-primary" to="/Mobails">
                View details &raquo;
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="../images/accessories.png"
              alt="Stickman"
              width="50%"
              height="30%"
            />
            <h2>accessories</h2>
            <p>Click to see more products.</p>
            <p>
              <Link className="btn btn-outline-primary" to="/accessories">
                View details &raquo;
              </Link>
            </p>
          </div>
        </div>

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
                        <b>EGP 26,499.00</b>{" "}
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
                    src="../images/Honor 50.png"
                    alt="Stickman"
                    width="91%"
                    height="91%"
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

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="../images/Apple MacBook Pro.png"
                    alt="Stickman"
                    width="105%"
                    height="105%"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <h5>
                        <b>Apple MacBook Pro</b>
                      </h5>
                      Processor: Apple M1 Pro chip <br />
                      with 10‑core CPU and 16‑core GPU <br />
                      RAM : 16GB
                      <br />
                      Hard Disk: 1TB SSD
                      <br />
                      Color : Space Grey
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
                        <b>EGP 56,900.00</b>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="../images/Dell G3-3500.jpg"
                    alt="Stickman"
                    width="94%"
                    height="94%"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      <h5>
                        <b>Dell G3-3500</b>
                      </h5>
                      Processor: 10th Generation Intel® <br />
                      Core™ I5-10300H 8M Cache, up to 4.50 GHz <br />
                      RAM: 8GB
                      <br />
                      Hard Disk: 512GBSSD
                      <br />
                      Graphics Card: NVIDIA GeForce GTX 1650 4GB
                      <br />
                      Color: Black
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
                        <b>EGP 17,399.00</b>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="../images/Huawei Matebook 14.jpg"
                    alt="Stickman"
                    width="93%"
                    height="93%"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <h5>
                        <b>Huawei Matebook 14</b>
                      </h5>
                      Processor: 11th Generation Intel® Core™ i7-1165G7 <br />
                      Processor (12M Cache, up to 4.70 GHz) <br />
                      RAM: 16 GB
                      <br />
                      Hard Disk:512GBSSD
                      <br />
                      Graphics Card: Intel® Iris® Xe Graphics
                      <br />
                      Color: Grey
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
                        <b>EGP 25,999.00</b>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="text-black border border-dark p-5" action="#!">
        <p className="h4 mb-4">Contact us</p>

        <input
          type="text"
          id="defaultContactFormName"
          className="form-control mb-4"
          placeholder="Name"
        />

        <input
          type="email"
          id="defaultContactFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
        />

        <label>Subject</label>
        <select className="browser-default custom-select mb-4">
          <option value="" disabled>
            Choose option
          </option>
          <option value="1" selected>
            Feedback
          </option>
          <option value="2">Report a bug</option>
          <option value="3">Feature request</option>
          <option value="4">Feature request</option>
        </select>

        <div className="form-group">
          <textarea
            className="form-control rounded-0"
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="custom-control custom-checkbox mb-4">
          <input
            type="checkbox"
            className="custom-control-input"
            id="defaultContactFormCopy"
          />
          <label className="custom-control-label" for="defaultContactFormCopy">
            Send me a copy of this message
          </label>
        </div>

        <button className="btn btn-info btn-block" type="submit">
          Send
        </button>
      </form>
    </HomePageStyled>
  );
};
export default HomePage;
