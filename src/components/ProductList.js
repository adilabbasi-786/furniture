import React, { useEffect, useState } from "react";

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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div class="single_product_list_slider">
                <div class="row align-items-center justify-content-between">
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_1.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_2.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_3.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_4.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_5.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_6.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_7.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <div class="single_product_item">
                      <img src="img/product/product_8.png" alt="" />
                      <div class="single_product_text">
                        <h4>Quartz Belt Watch</h4>
                        <h3>$150.00</h3>
                        <a href="#" class="add_cart">
                          + add to cart<i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
