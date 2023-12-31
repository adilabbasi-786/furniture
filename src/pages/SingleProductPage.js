import React, { useContext, useEffect, useState } from "react";
import prod1 from "../assests/product/single-product/product_1.png";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../Context/CartContext";
function SingleProductPage(item) {
  const { handleAddToCart } = useContext(Context);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        `http://localhost:1337/api/products/${id}?populate=*`
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>Shop Single</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="product_image_area section_padding">
        <div class="container" key={item.id}>
          <div class="row s_product_inner justify-content-between">
            <div class="col-lg-7 col-xl-7">
              <div class="product_slider_img">
                <div id="vertical">
                  <Carousel>
                    <div>
                      <img
                        src={`http://localhost:1337${data?.attributes?.img?.data[0]?.attributes?.url}`}
                      />
                    </div>
                    <div>
                      <img src={prod1} />
                    </div>
                    <div>
                      <img src={prod1} />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-xl-4">
              <div class="s_product_text">
                <h5>
                  previous <span>|</span> next
                </h5>
                <h3>{data?.attributes?.title}</h3>
                <h2>${data?.attributes?.price}</h2>
                <ul class="list">
                  <li>
                    <a class="active" href="#">
                      <span>Category</span> : Household
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>Availibility</span> : In Stock
                    </a>
                  </li>
                </ul>
                <p>
                  First replenish living. Creepeth image image. Creeping can't,
                  won't called. Two fruitful let days signs sea together all
                  land fly subdue
                </p>
                <div class="card_area d-flex justify-content-between align-items-center">
                  <div class="product_count">
                    <span class="inumber-decrement">
                      {" "}
                      <i
                        class="fas fa-minus"
                        onClick={() =>
                          setQuantity((prev) => (prev == 1 ? 1 : prev - 1))
                        }
                      ></i>
                    </span>
                    <input
                      class="input-number"
                      type="text"
                      value={quantity}
                      min="0"
                      max="10"
                    />
                    <span class="number-increment">
                      {" "}
                      <i
                        class="fas fa-plus"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      ></i>
                    </span>
                  </div>
                  <p
                    class="btn_3"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      console.log(data);
                      handleAddToCart(data, quantity);

                      setQuantity(1);
                    }}
                  >
                    add to cart
                  </p>
                  <a href="#" class="like_us">
                    {" "}
                    <i class="fas fa-heart"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="product_description_area">
        <div class="container">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class={`nav-link ${
                  activeTab === "description" ? "active" : ""
                }`}
                id="description-tab"
                onClick={() => handleTabClick("description")}
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected={activeTab === "description"}
              >
                Description
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${
                  activeTab === "specification" ? "active" : ""
                }`}
                onClick={() => handleTabClick("specification")}
                id="specification-tab"
                data-toggle="tab"
                href="#specification"
                role="tab"
                aria-controls="specification"
                aria-selected={activeTab === "specification"}
              >
                Specification
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${activeTab === "comments" ? "active" : ""}`}
                onClick={() => handleTabClick("comments")}
                id="comments-tab"
                data-toggle="tab"
                href="#comments"
                role="tab"
                aria-controls="comments"
                aria-selected={activeTab === "comments"}
              >
                Comments
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => handleTabClick("reviews")}
                id="reviews-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                Reviews
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class={`tab-pane fade ${
                activeTab === "description" ? "show active" : ""
              }`}
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <p>
                Beryl Cook is one of Britain’s most talented and amusing artists
                .Beryl’s pictures feature women of all shapes and sizes enjoying
                themselves .Born between the two world wars, Beryl Cook
                eventually left Kendrick School in Reading at the age of 15,
                where she went to secretarial school and then into an insurance
                office. After moving to London and then Hampton, she eventually
                married her next door neighbour from Reading, John Cook. He was
                an officer in the Merchant Navy and after he left the sea in
                1956, they bought a pub for a year before John took a job in
                Southern Rhodesia with a motor company. Beryl bought their young
                son a box of watercolours, and when showing him how to use it,
                she decided that she herself quite enjoyed painting. John
                subsequently bought her a child’s painting set for her birthday
                and it was with this that she produced her first significant
                work, a half-length portrait of a dark-skinned lady with a
                vacant expression and large drooping breasts. It was aptly named
                ‘Hangover’ by Beryl’s husband and
              </p>
              <p>
                It is often frustrating to attempt to plan meals that are
                designed for one. Despite this fact, we are seeing more and more
                recipe books and Internet websites that are dedicated to the act
                of cooking for one. Divorce and the death of spouses or grown
                children leaving for college are all reasons that someone
                accustomed to cooking for more than one would suddenly need to
                learn how to adjust all the cooking practices utilized before
                into a streamlined plan of cooking that is more efficient for
                one person creating less
              </p>
            </div>
            <div
              class={`tab-pane fade ${
                activeTab === "specification" ? "show active" : ""
              }`}
              id="specification"
              role="tabpanel"
              aria-labelledby="specification-tab"
            >
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <h5>Width</h5>
                      </td>
                      <td>
                        <h5>128mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Height</h5>
                      </td>
                      <td>
                        <h5>508mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Depth</h5>
                      </td>
                      <td>
                        <h5>85mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Weight</h5>
                      </td>
                      <td>
                        <h5>52gm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Quality checking</h5>
                      </td>
                      <td>
                        <h5>yes</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Freshness Duration</h5>
                      </td>
                      <td>
                        <h5>03days</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>When packeting</h5>
                      </td>
                      <td>
                        <h5>Without touch of hand</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Each Box contains</h5>
                      </td>
                      <td>
                        <h5>60pcs</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class={`tab-pane fade ${
                activeTab === "comments" ? "show active" : ""
              }`}
              id="comments"
              role="tabpanel"
              aria-labelledby="comments-tab"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="comment_list">
                    <div class="review_item">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src="img/product/single-product/review-1.png"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2017 at 05:56 pm</h5>
                          <a class="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div class="review_item reply">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src="img/product/single-product/review-2.png"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2017 at 05:56 pm</h5>
                          <a class="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src="img/product/single-product/review-3.png"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2017 at 05:56 pm</h5>
                          <a class="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="review_box">
                    <h4>Post a comment</h4>
                    <form
                      class="row contact_form"
                      action="contact_process.php"
                      method="post"
                      id="contactForm"
                      novalidate="novalidate"
                    >
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="number"
                            name="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <button type="submit" value="submit" class="btn_3">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class={`tab-pane fade ${
                activeTab === "reviews" ? "show active" : ""
              }`}
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="row total_rate">
                    <div class="col-6">
                      <div class="box_total">
                        <h5>Overall</h5>
                        <h4>4.0</h4>
                        <h6>(03 Reviews)</h6>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="rating_list">
                        <h3>Based on 3 Reviews</h3>
                        <ul class="list">
                          <li>
                            <a href="#">
                              5 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              4 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              3 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              2 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              1 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="review_list">
                    <div class="review_item">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src="img/product/single-product/review-1.png"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src="img/product/single-product/review-2.png"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src="img/product/single-product/review-3.png"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="review_box">
                    <h4>Add a Review</h4>
                    <p>Your Rating:</p>
                    <ul class="list">
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </li>
                    </ul>
                    <p>Outstanding</p>
                    <form
                      class="row contact_form"
                      action="contact_process.php"
                      method="post"
                      novalidate="novalidate"
                    >
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            rows="1"
                            placeholder="Review"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <button type="submit" value="submit" class="btn_3">
                          Submit Now
                        </button>
                      </div>
                    </form>
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

export default SingleProductPage;
