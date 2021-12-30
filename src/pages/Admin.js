import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AdminStyled } from "../component/AdminStyled";

const Mobails = () => {
  return (
    <AdminStyled>
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
                  <button className="btn btn-outline-primary" type="submit">
                    @Admin
                  </button>
              </li>
            </ul>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-3 mb-md-0">
                <li className="nav-item">
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-3 mb-md-0">
                <li className="nav-item">
                  <button className="btn btn-primary" type="submit">
                    Add Item
                  </button>
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
            <h1 className="fw-light">Admin page</h1>
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
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
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
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
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
                <img src="../images/20 ultra.png" alt="Stickman"width="108%" height="108%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Samsung Galaxy Note20 Ultra</b></h5>
                    Display Size In Inches: 6.9 inches <br/>
                    Processor CPU: Octa-core<br/>
                    Internal Memory Capacity In GB: 256 GB<br/>
                    Memory RAM In GB: 8 GB<br/>
                    Rear Camera: 108MP+12MP+12MP<br/>
                    Front Camera: 10 MP<br/>
                    Battery: 4500 mAh battery <br/>
                    colors:Mystic White
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 18,499.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/s21 ultra.png" alt="Stickman"width="98%" height="98%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Samsung Galaxy S21 Ultra 5G</b></h5>
                    Display Size In Inches: 6.8 inches <br/>
                    Processor CPU: Octa-core<br/>
                    Internal Memory Capacity In GB: 256 GB<br/>
                    Memory RAM In GB: 12 GB<br/>
                    Rear Camera: 108MP+10MP+10MP+12MP<br/>
                    Front Camera: 40 MP<br/>
                    Battery: 4500 mAh battery<br/>
                    Color: Phantom Black
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 21,999.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/OPPO Reno6.png" alt="Stickman"width="100%" height="100%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Oppo Reno6</b></h5>
                    Display Size In Inches: 6.4 inches <br/>
                    Processor CPU: Octa-core<br/>
                    Internal Memory Capacity In GB: 128 GB<br/>
                    Memory RAM In GB: 8 GB<br/>
                    Rear Camera: 64MP+8MP+2MP+2MP<br/>
                    Front Camera: 44 MP<br/>
                    colors:Aurora<br/>
                    Battery: 4310 mAh 
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b> EGP 6,485.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/relme8.png" alt="Stickman"width="112%" height="112%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Realme 8</b></h5>
                    Display Size In Inches: 6.4 inches <br/>
                    Processor CPU: Octa-core<br/>
                    Internal Memory Capacity In GB: 128 GB<br/>
                    Memory RAM In GB: 8 GB<br/>
                    Rear Camera: 64MP+8MP+2MP+2MP<br/>
                    Front Camera: 16 MP<br/>
                    Battery: 5000 mAh<br/>
                    Color: Cyber Black
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 5,690.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
         
                <img src="../images/MI 11 T.png" alt="Stickman"width="100%" height="100%" />

                <div className="card-body">
                  <p className="card-text">
               <h5><b>MI 11 T</b></h5> 
                  Display Size In Inches: 6.67 inches<br/>
                  Processor CPU: Octa-core<br/>
                  Internal Memory Capacity In GB: 256 GB<br/>
                  Memory RAM In GB: 8 GB<br/>
                  Rear Camera: 108MP+8MP+5MP<br/>
                  Front Camera: 16 MP<br/>
                  Battery: 5000 mAh<br/>
                  Color: Cerestial Blue
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 8,180.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/Xiaomi Redmi Note 10 Pro.png" alt="Stickman"width="103%" height="103%" />
                <div className="card-body">
                  <p className="card-text">
               <h5><b>Xiaomi Redmi Note 10 Pro</b></h5> 
               Display Size In Inches: 6.67 inches <br/>
               Processor CPU: Octa-core<br/>
               Internal Memory Capacity In GB: 128 GB<br/>
               Memory RAM In GB: 8 GB<br/>
               Rear Camera: 108MP+8MP+5MP+2MP<br/>
               Front Camera: 16 MP<br/>
               Battery: 4500 mAh<br/>
               Color: Onyx Gray
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 5,649.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/Honor 50.png" alt="Stickman"width="95%" height="95%" />

                <div className="card-body">
                  <p className="card-text">
               <h5><b>Honor 50</b></h5> 
               Display Size In Inches: 6.57 inches <br/>
                Processor CPU: Octa-core<br/>
                Internal Memory Capacity In GB: 256 GB<br/>
                Memory RAM In GB: 8 GB<br/>
                Rear Camera: 108MP+8MP+2MP+2MP<br/>
                Front Camera: 32 MP<br/>
                Battery: 4300 mAh<br/>
                Color: Emerald Green
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 9,830.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/Apple MacBook Pro.png" alt="Stickman"width="105%" height="105%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Apple MacBook Pro</b></h5> 
                    Processor: Apple M1 Pro chip <br/>with 10‑core CPU and 16‑core GPU <br/>
                    RAM : 16GB<br/>
                    Hard Disk: 1TB SSD<br/>
                    Color : Space Grey
                    </p> 
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 56,900.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="col">
              <div className="card shadow-sm">
         
                <img src="../images/Dell G3-3500.jpg" alt="Stickman"width="94%" height="94%" />
               

                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Dell G3-3500</b></h5> 
                    Processor: 10th Generation Intel® <br/>Core™ I5-10300H 8M Cache, up to 4.50 GHz <br/>
                    RAM: 8GB<br/>
                    Hard Disk: 512GBSSD<br/>
                    Graphics Card: NVIDIA GeForce GTX 1650 4GB<br/>
                    Color: Black
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                   <h5> <b>EGP 17,399.00</b></h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/Huawei Matebook 14.jpg" alt="Stickman"width="93%" height="93%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Huawei Matebook 14</b></h5>
                    Processor: 11th Generation Intel® Core™ i7-1165G7 <br/>Processor (12M Cache, up to 4.70 GHz) <br/>
                    RAM: 16 GB<br/>
                    Hard Disk:512GBSSD<br/>
                    Graphics Card: Intel® Iris® Xe Graphics<br/>
                    Color: Grey
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 25,999.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/Lenovo Legion 5.png" alt="Stickman"width="92%" height="90%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>Lenovo Legion 5</b></h5>
                    Processor: AMD Ryzen™ 7-5800H  <br/>(3.2GHz, up to 4.40GHz Max Boost, <br/>8 Cores, 16 Threads, 16MB Cache) <br/>
                    RAM:16GB DDR4<br/>
                    Hard Disk: 512GBSSD<br/>
                    Graphics Card:NVIDIA® GeForce RTX™ 3050TI 4GB<br/>
                    Color: Black
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 24,499.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/HP OMEN 15-dh1040nia.png" alt="Stickman"width="105%" height="115%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>HP OMEN 15-dh1040nia</b></h5>
                    Processor: 10 Gen Intel® Core™ i7-10750H 2.6 GHz  <br/>base frequency, up to 5 GHz with Intel®  <br/>Turbo Boost Technology, <br/> 12 MB L3 cache, 6 cores <br/>
                    RAM: 16 GB DDR4<br/>
                    Hard Disk: 1TB+256GBSSD <br/>
                    Graphics Card: NVIDIA® GeForce® GTX 1660 Ti 6GB<br/>
                    Color: Black
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b> EGP 25,899.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/ASUS X543MA-GQ1014T.png" alt="Stickman"width="148%" height="148%" />
                <div className="card-body">
                  <p className="card-text">
                    <h5><b>ASUS X543MA-GQ1014T</b></h5>
                    Processor:Intel® Celeron® N4020 4M Cache,<br/> up to 2.80 GHz <br/>
                    RAM: 4GB<br/>
                    Hard Disk: 1TB<br/>
                    Graphics Card:Integrated graphics<br/>
                    Color: Silve
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 5,199.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/Acer Swift 5.jpg" alt="Stickman"width="99%" height="99%" />

                <div className="card-body">
                  <p className="card-text">
               <h5><b>Acer Swift 5</b></h5> 
               Processor: 10th Gen Intel® Core™ i7-1065g7 8M Cache, <br/>up to 3.90 GHz <br/>
               RAM: 8GB<br/>
               Hard Disk:512GB SSD<br/>
               Graphics Card: NVIDIA GeForce MX250 2GB<br/>
               Color: White
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 8,180.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/MSI GL66 l 11uGKV.png" alt="Stickman"width="113%" height="113%" />
                <div className="card-body">
                  <p className="card-text">
               <h5><b>MSI GL66 l 11uGKV</b></h5> 
               Processor: 11th Generation Intel® <br/>Core™ i7-11800H up to 4.6GHz <br/>
               RAM: 16GB<br/>
               Hard Disk: 512GBSSD<br/>
               Graphics Card: NVIDIA® GeForce® RTX™ 3070 8GB<br/>
               Color: Gray
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 33,399.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card shadow-sm">
                <img src="../images/Apple MacBook Air.jpg" alt="Stickman"width="99%" height="99%" />

                <div className="card-body">
                  <p className="card-text">
               <h5><b>Apple MacBook Air </b></h5> 
               Processor:Apple M1 chip with<br/> 8-core CPU and 7-core GPU <br/>
               RAM : 8GB<br/>
               Hard Disk: 256GBSSD<br/>
               Color : Silver
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                       Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                       Remove
                      </button>
                    </div>
                    <h5 ><b>EGP 9,830.00</b> </h5>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </AdminStyled>
  );
};

export default Mobails;
