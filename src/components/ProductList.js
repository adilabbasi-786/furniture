import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        "http://localhost:1337/api/products?filters[show_on_Homepage][$eq]=true&pagination[page]=1&pagination[pageSize]=4&populate=*"
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <section class="product_list section_padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="section_tittle text-center">
                <h2>
                  awesome <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="product_list_slider owl-carousel">
                <div class="single_product_list_slider">
                  <div class="row align-items-center justify-content-between">
                    {data.map((item) => (
                      <div class="col-lg-3 col-sm-6">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
