import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../ASSETS/logo.png";

import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../Context/Context";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { login, setlogin } = useContext(UserContext);

  console.log(login);
  if (login) {
    return (
      <div>
        <nav className="main-nav">
          <div className="logo">
            <a>
              <img src={logo} alt="logo" className="logoimg" />
            </a>
          </div>

          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li>
                <Link
                  to="/home"
                  style={{ textDecoration: "none",fontSize:"16px", fontWeight: "600" }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  style={{ textDecoration: "none",fontSize:"16px",fontWeight: "600" }}
                >
                  About
                </Link>
              </li>
              {login.role === 0 ? (
                <div style={{ display: "flex" }}>
                  {" "}
                  <li>
                    <Link
                      to="/products"
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        marginRight: "18px",
                        marginLeft:"0.7em",

                        fontSize:"16px"
                      }}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/requisitions/${login.userId}`}
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        marginLeft: "1em"
                        ,fontSize:"16px"
                      }}
                    >
                      Requisitions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Home"
                      style={{ textDecoration: "none", fontWeight: "600",fontSize:"16px" }}
                    >
                      <button className="btn btn-dark btn-lg"
                      style={{marginLeft:"1em"}}
                        onClick={() => {
                          setlogin(null);
                        }}
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                </div>
              ) : (
                <div style={{ display: "flex" }}>
                  {" "}
                  <li>
                    <Link
                      to="/adminproducts"
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        marginRight: "18px"
                        ,fontSize:"16px"
                      }}
                    >
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reviewrequisitions"
                      style={{ textDecoration: "none",fontSize:"16px",fontWeight: "600" }}
                    >
                      Review Requisitions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/userpage"
                      style={{ textDecoration: "none", fontWeight: "600",fontSize:"16px",marginLeft:"0.7em" }}
                    >
                      User Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Home"
                      style={{ textDecoration: "none", fontWeight: "600",fontSize:"16px",marginLeft:"0.7em"}}
                    >
                      <button className="btn btn-dark btn-lg"
                        onClick={() => {
                          setlogin(null);
                        }}
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div className="social-media">
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="main-nav">
          <div className="logo">
            <a>
              <img src={logo} alt="logo" className="logoimg" />
            </a>
          </div>

          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", fontWeight: "600" }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", fontWeight: "600" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    marginRight: "28px",
                  }}
                >
                  login
                </Link>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
