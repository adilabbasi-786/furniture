import React, { useState } from "react";
import logo from "../assests/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <header class="main_menu home_menu">
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
                      <a class="nav-link" href="index.html">
                        Home
                      </a>
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

                  <NavLink to="/login">
                    <li class="nav-item">
                      <a class="nav-link" href="">
                        Login
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div class="hearer_icon d-flex">
                <a id="search_1" href="javascript:void(0)">
                  <i class="fas fa-search"></i>
                </a>
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <div class="dropdown cart">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    id="navbarDropdown3"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-cart-plus"></i>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div class="single_product"></div>
                  </div>
                </div>
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
