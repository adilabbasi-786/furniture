import React, { useEffect, useState } from "react";
import "./priceRange.css";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [category, setCategory] = useState([]);
  const [colorCategory, setColorCategory] = useState([]);
  const [searchParams] = useSearchParams();
  const cat_id = searchParams.get("category_id");
  const [selectedCategory, setSelectedCategory] = useState(cat_id);
  const color_id = searchParams.get("color_id");
  const [filter, setFilter] = useState({
    categories: [],
    color: [],
    searchQuery: "",
    sortby: "",
    page: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  // useEffect(() => {
  //   let newFilter = structuredClone(filter);
  //   newFilter.categories.push(Number(cat_id));
  //   setFilter(newFilter);
  // }, [cat_id]);

  useEffect(() => {
    let url = "http://localhost:1337/api/products?populate=*";
    for (let i = 0; i < filter.categories.length; i++) {
      url =
        url + `&filters[$or][${i}][category][id][$eq]=${filter.categories[i]}`;
    }
    for (let i = 0; i < filter.color.length; i++) {
      url = url + `&filters[$or][${i}][color][id][$eq]=${filter.color[i]}`;
    }
    if (filter.sortby === "pricedesc") {
      url = url + `&sort=price:desc`;
    } else if (filter.sortby === "priceAsc") {
      url = url + `&sort=price:asc`;
    } else if (filter.sortby === "dateNewest") {
      url = url + `&sort=createdAt:desc`;
    }
    if (filter.searchQuery !== "") {
      url = url + `&filters[title][$contains]=${filter.searchQuery}`;
    }
    if (filter.page === 1) {
      const start = 0; // Start from the beginning
      url = `${url}&pagination[start]=${start}&pagination[limit]=${productsPerPage}`;
    } else {
      const start = (currentPage - 1) * productsPerPage;
      url = `${url}&pagination[start]=${start}&pagination[limit]=${productsPerPage}`;
    }
    getUrlData(url);

    console.log(url);
  }, [filter, currentPage]);
  const getUrlData = async (url) => {
    let req = await fetch(url);
    let res = await req.json();
    console.log(res);
    setProducts(res.data);
  };

  const getData = async () => {
    let url = "http://localhost:1337/api/products?populate=*";
    if (cat_id) {
      url = `http://localhost:1337/api/products?populate=*&filters[category][id][$eq]=${cat_id}`;
    }
    let req = await fetch(url);
    let res = await req.json();
    setProducts(res.data);
  };
  useEffect(() => {
    getData();
    getCategory();
    getColor();
  }, [color_id]);
  const getCategoryData = async () => {
    let url = "http://localhost:1337/api/products?populate=*";
    if (selectedCategory) {
      url = `http://localhost:1337/api/products?populate=*&filters[category][id][$eq]=${selectedCategory}`;
    }
    let req = await fetch(url);
    let res = await req.json();
    setProducts(res.data);
  };
  useEffect(() => {
    getCategoryData();
  }, [selectedCategory]);

  const getCategory = async () => {
    let url = "http://localhost:1337/api/categories?populate=*";

    let req = await fetch(url);
    let res = await req.json();
    setCategory(res.data);
  };

  const getColor = async () => {
    let url = "http://localhost:1337/api/colors?populate=*";
    if (color_id) {
      url = `http://localhost:1337/api/products?populate=*&filters[color][id][$eq]=${color_id}`;
    }
    let req = await fetch(url);
    let res = await req.json();
    setColorCategory(res.data);
  };

  const sortedProducts = [...products];

  if (sortOrder === "nameAsc") {
    sortedProducts.sort((a, b) =>
      a?.attributes?.title.localeCompare(b?.attributes?.title)
    );
  } else if (sortOrder === "priceAsc") {
    sortedProducts.sort((a, b) => a?.attributes?.price - b?.attributes?.price);
  } else if (sortOrder === "dateNewest") {
    sortedProducts.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }

  const handleSortChange = (event) => {
    let newFilter = structuredClone(filter);
    newFilter.sortby = event.target.value;
    setFilter(newFilter);
  };
  const handleSearch = (event) => {
    let newFilter = structuredClone(filter);
    newFilter.searchQuery = event.target.value;
    setFilter(newFilter);
  };

  const handleCategoryClick = (categoryId) => {
    let newFilter = structuredClone(filter);
    if (newFilter.categories.includes(categoryId)) {
      newFilter.categories = filter.categories.filter(
        (item) => item !== categoryId
      );
    } else {
      newFilter.categories.push(categoryId);
    }

    setFilter(newFilter);
  };
  const handleColorClick = (colorId) => {
    let newColorFitler = structuredClone(filter);
    if (newColorFitler.color.includes(colorId)) {
      newColorFitler.color = filter.color.filter((item) => item !== colorId);
    } else {
      newColorFitler.color.push(colorId);
    }

    setFilter(newColorFitler);
  };
  const handlePageChange = (page) => {
    let newFilter = structuredClone(filter);
    newFilter.page = page;
    setFilter(newFilter);
    setCurrentPage(page);
  };
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>All Products</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cat_product_area section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="left_sidebar_area">
                <aside class="left_widgets p_filter_widgets">
                  <div class="l_w_title">
                    <h3>Browse Categories</h3>
                  </div>
                  <div class="widgets_inner">
                    <ul class="list">
                      {category.map((cat) => (
                        <li
                          onClick={() => handleCategoryClick(cat.id)}
                          className={
                            cat.id === selectedCategory ? "activeCategory" : ""
                          }
                          style={{
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }}
                        >
                          <span className="">
                            <input
                              type="checkbox"
                              value={cat.id}
                              checked={filter.categories.includes(cat.id)}
                            />{" "}
                            {cat?.attributes?.name}
                          </span>

                          <span>(250)</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>

                <aside class="left_widgets p_filter_widgets">
                  <div class="l_w_title">
                    <h3>Color Filter</h3>
                  </div>
                  <div class="widgets_inner">
                    <ul class="list">
                      {colorCategory.map((col) => (
                        <li
                          key={col.id}
                          onClick={() => handleColorClick(col.id)}
                        >
                          <span className="">
                            <input
                              type="checkbox"
                              value={col.id}
                              checked={filter.color.includes(col.id)}
                            />{" "}
                            {col?.attributes?.color_name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-12">
                  <div class="product_top_bar d-flex justify-content-between align-items-center">
                    <div class="single_product_menu">
                      <p>
                        <span>{products.length} </span> Products Found
                      </p>
                    </div>
                    <div class="single_product_menu d-flex ">
                      <h5>short by : </h5>
                      <select onChange={handleSortChange} value={filter.sortby}>
                        <option value="">Select</option>
                        <option value="pricedesc">price (High to Low) </option>
                        <option value="priceAsc">Price (Low to High)</option>
                        <option value="dateNewest">Newest</option>
                      </select>
                    </div>

                    <div class="single_product_menu d-flex">
                      <div class="input-group">
                        <input
                          onChange={handleSearch}
                          value={filter.searchQuery}
                          type="text"
                          class="form-control"
                          placeholder="search"
                          aria-describedby="inputGroupPrepend"
                        />
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupPrepend">
                            <i class="fas fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row align-items-center latest_product_inner">
                {sortedProducts.map((item) => (
                  <div class="col-lg-4 col-sm-6">
                    <Link to={`/singleproduct/${item.id}`}>
                      <div class="single_product_item">
                        <img
                          src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
                          alt=""
                        />
                        <div class="single_product_text">
                          <h4>{item?.attributes?.title}</h4>
                          <h3>${item?.attributes?.price}</h3>
                          <a href="#" class="add_cart">
                            + add to cart<i class="fas fa-cart-plus"></i>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

                <div class="col-lg-12">
                  <div class="pageination">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-center">
                        <li
                          class={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <button
                            class="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                            aria-label="Previous"
                          >
                            <i class="fas fa-angle-double-left"></i>
                          </button>
                        </li>
                        {Array.from(
                          {
                            length: Math.ceil(
                              products.length / productsPerPage
                            ),
                          },
                          (_, index) => (
                            <li
                              class={`page-item ${
                                currentPage === index + 1 ? "active" : ""
                              }`}
                              key={index}
                            >
                              <button
                                class="page-link"
                                onClick={() => setCurrentPage(index + 1)}
                              >
                                {index + 1}
                              </button>
                            </li>
                          )
                        )}
                        <li
                          class={`page-item ${
                            currentPage ===
                            Math.ceil(products.length / productsPerPage)
                              ? "disabled"
                              : ""
                          }`}
                        >
                          <button
                            class="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                            aria-label="Next"
                          >
                            <i class="fas fa-angle-double-right"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AllProducts;
