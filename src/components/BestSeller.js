import React from "react";
import prod1 from "../assests/product/product_1.png";
import prod2 from "../assests/product/product_2.png";
import prod3 from "../assests/product/product_3.png";
import prod4 from "../assests/product/product_4.png";
import prod5 from "../assests/product/product_5.png";
function BestSeller() {
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
                    <div class="col-lg-3 col-sm-6">
                      <div class="single_product_item">
                        <img src={prod1} alt="" />
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
                        <img src={prod2} alt="" />
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
                        <img src={prod3} alt="" />
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
                        <img src={prod4} alt="" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSeller;
