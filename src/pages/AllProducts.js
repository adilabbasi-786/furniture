import React, { useEffect, useState } from "react";
import "./priceRange.css";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const getData = async () => {
    let req = await fetch("http://localhost:1337/api/products?populate=*");
    let res = await req.json();
    setProducts(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
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
    setSortOrder(event.target.value);
    console.log(event.target.value);
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
                      <li>
                        <a href="#">Frozen Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Dried Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Fresh Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Meat Alternatives</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Fresh Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Meat Alternatives</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Meat</a>
                        <span>(250)</span>
                      </li>
                    </ul>
                  </div>
                </aside>

                <aside class="left_widgets p_filter_widgets">
                  <div class="l_w_title">
                    <h3>Product filters</h3>
                  </div>
                  <div class="widgets_inner">
                    <ul class="list">
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Asus</a>
                      </li>
                      <li class="active">
                        <a href="#">Gionee</a>
                      </li>
                      <li>
                        <a href="#">Micromax</a>
                      </li>
                      <li>
                        <a href="#">Samsung</a>
                      </li>
                    </ul>
                    <ul class="list">
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Asus</a>
                      </li>
                      <li class="active">
                        <a href="#">Gionee</a>
                      </li>
                      <li>
                        <a href="#">Micromax</a>
                      </li>
                      <li>
                        <a href="#">Samsung</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <aside class="left_widgets p_filter_widgets">
                  <div class="l_w_title">
                    <h3>Color Filter</h3>
                  </div>
                  <div class="widgets_inner">
                    <ul class="list">
                      <li>
                        <a href="#">Black</a>
                      </li>
                      <li>
                        <a href="#">Black Leather</a>
                      </li>
                      <li class="active">
                        <a href="#">Black with red</a>
                      </li>
                      <li>
                        <a href="#">Gold</a>
                      </li>
                      <li>
                        <a href="#">Spacegrey</a>
                      </li>
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
                        <span>10000 </span> Prodict Found
                      </p>
                    </div>
                    <div class="single_product_menu d-flex ">
                      <h5>short by : </h5>
                      <select onChange={handleSortChange} value={sortOrder}>
                        <option value="">Select</option>
                        <option value="nameAsc">Name (A-Z)</option>
                        <option value="priceAsc">Price (Low to High)</option>
                        <option value="dateNewest">Newest</option>
                      </select>
                    </div>
                    <div class="single_product_menu d-flex">
                      <h5>show :</h5>
                      <div class="top_pageniation">
                        <ul>
                          <li>1</li>
                          <li>2</li>
                          <li>3</li>
                        </ul>
                      </div>
                    </div>
                    <div class="single_product_menu d-flex">
                      <div class="input-group">
                        <input
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
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <i class="fas fa-angle-double-left"></i>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            6
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            <i class="fas fa-angle-double-right"></i>
                          </a>
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
