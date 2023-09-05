import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import blog1 from "../assests/blog/single_blog_1.png";
import blog2 from "../assests/blog/single_blog_2.png";
import post1 from "../assests/post/post_1.png";
import post2 from "../assests/post/post_2.png";
import post3 from "../assests/post/post_3.png";
import post4 from "../assests/post/post_5.png";

function Blog() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let req = await fetch("http://localhost:1337/api/blogs?populate=*");
    let res = await req.json();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>Blogs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog_area padding_top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                {data.map((item) => (
                  <Link to={`/singleblog/${item.id}`}>
                    <article class="blog_item">
                      <div class="blog_item_img">
                        <img
                          class="card-img rounded-0"
                          src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
                          alt=""
                        />
                        <a href="#" class="blog_item_date">
                          <h3>15</h3>
                          <p>Jan</p>
                        </a>
                      </div>

                      <div class="blog_details">
                        <a class="d-inline-block" href="single-blog.html">
                          <h2>{item?.attributes?.title}</h2>
                        </a>
                        <p>{item?.attributes?.desc}</p>
                        <ul class="blog-info-link">
                          <li>
                            <a href="#">
                              <i class="far fa-user"></i> Travel, Lifestyle
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="far fa-comments"></i> 03 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </Link>
                ))}

                <nav class="blog-pagination justify-content-center d-flex">
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Previous">
                        <i class="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        1
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Next">
                        <i class="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget search_widget">
                  <form action="#">
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Keyword"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"
                        />
                        <div class="input-group-append">
                          <button class="btn" type="button">
                            <i class="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      class="button rounded-0 primary-bg text-white w-100 btn_1"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </aside>

                <aside class="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title">Category</h4>
                  <ul class="list cat-list">
                    <li>
                      <a href="#" class="d-flex">
                        <p>Resaurant food</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Travel news</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Modern technology</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Product</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Inspiration</p>
                        <p>21</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Health Care (21)</p>
                        <p>09</p>
                      </a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title">Recent Post</h3>
                  <div class="media post_item">
                    <img src={post1} alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src={post2} alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src={post3} alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src={post1} alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside class="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tag Clouds</h4>
                  <ul class="list">
                    <li>
                      <a href="#">project</a>
                    </li>
                    <li>
                      <a href="#">love</a>
                    </li>
                    <li>
                      <a href="#">technology</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">restaurant</a>
                    </li>
                    <li>
                      <a href="#">life style</a>
                    </li>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">illustration</a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget instagram_feeds">
                  <h4 class="widget_title">Instagram Feeds</h4>
                  <ul class="instagram_row flex-wrap">
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post4} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post2} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post4} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class={post4} src="img/post/post_10.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget newsletter_widget">
                  <h4 class="widget_title">Newsletter</h4>

                  <form action="#">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button
                      class="button rounded-0 primary-bg text-white w-100 btn_1"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
