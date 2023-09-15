import React, { useContext, useEffect, useState } from "react";
import logo from "../assests/logo.png";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import "./Header.css";
import { AuthContext } from "../Context/AuthContext";

function Header() {
  const auth = useContext(AuthContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const logoutHandle = () => {
    auth.setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <header
      class={`main_menu home_menu  ${scrolled ? "sticky-header" : ""}`}
      style={{ zIndex: "999" }}
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <NavLink to="/">
                <a class="navbar-brand" href="">
                  {" "}
                  <img src={logo} alt="logo" />{" "}
                </a>
              </NavLink>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleToggle}
              >
                <span class="menu_icon">
                  <i class="fas fa-bars"></i>
                </span>
              </button>

              <div
                class={`collapse navbar-collapse main-menu-item ${
                  navbarOpen ? "show" : ""
                }`}
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <NavLink to="/">
                      <a class="nav-link">Home</a>
                    </NavLink>
                  </li>
                  <NavLink to="/allproducts">
                    <li class="nav-item">
                      <a class="nav-link" href="">
                        All Products
                      </a>
                    </li>
                  </NavLink>

                  <NavLink to="/blog">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link "
                        href=""
                        id="navbarDropdown_2"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        blogs
                      </a>
                      {/* <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown_2"
                      >
                        <a class="dropdown-item" href="blog.html">
                          {" "}
                          blog
                        </a>
                        <a class="dropdown-item" href="single-blog.html">
                          Single blog
                        </a>
                      </div> */}
                    </li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </NavLink>
                  {auth.token === null && (
                    <NavLink to="/login">
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          Login
                        </a>
                      </li>
                    </NavLink>
                  )}

                  {auth.token !== null && (
                    <NavLink to="/" onClick={logoutHandle}>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          Logout
                        </a>
                      </li>
                    </NavLink>
                  )}
                </ul>
              </div>
              <div class="hearer_icon d-flex">
                <a id="search_1" href="javascript:void(0)">
                  <i class="fas fa-search"></i>
                </a>
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <Cart />
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <div
        class={`search_input ${searchOpen ? "active" : ""}`}
        id="search_input_box"
      >
        <div class="container ">
          <form class="d-flex justify-content-between search-inner">
            <input
              type="text"
              class="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button
              type="submit"
              class="btn"
              onClick={handleSearchToggle}
            ></button>
            <span class="ti-close" id="close_search" title="Close Search">
              <i class="fas- fa-times"></i>
            </span>
          </form>
        </div>
      </div> */}
    </header>
  );
}

export default Header;
