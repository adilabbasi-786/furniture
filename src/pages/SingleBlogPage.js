import React, { useEffect, useState } from "react";
import prewiew from "../assests/post/preview.png";
import next from "../assests//post/next.png";
import authorImg from "../assests/blog/author.png";
import comentImg from "../assests/comment/comment_1.png";
import post1 from "../assests/post/post_1.png";
import post2 from "../assests/post/post_2.png";
import post3 from "../assests/post/post_3.png";
import { useParams } from "react-router-dom";

function SingleBlogPage(item) {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`);
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <div>
      {" "}
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>Single Blog Page</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog_area single-post-area padding_top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 posts-list">
              <div class="single-post" key={item.id}>
                <div class="feature-img">
                  <img
                    class="img-fluid"
                    src={`http://localhost:1337${data?.attributes?.img?.data[0]?.attributes?.url}`}
                    alt=""
                  />
                </div>
                <div class="blog_details">
                  <h2>{data?.attributes?.title}</h2>
                  <ul class="blog-info-link mt-3 mb-4">
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
                  <p class="excert">{data?.attributes?.desc}</p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually
                  </p>
                  <div class="quote-wrapper">
                    <div class="quotes">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a
                      self-imposed MCSE training.
                    </div>
                  </div>
                  <p>{data?.attributes?.addtional_desc}</p>
                </div>
              </div>
              <div class="navigation-top">
                <div class="d-sm-flex justify-content-between text-center">
                  <p class="like-info">
                    <span class="align-middle">
                      <i class="far fa-heart"></i>
                    </span>{" "}
                    Lily and 4 people like this
                  </p>
                  <div class="col-sm-4 text-center my-2 my-sm-0">
                    <p class="comment-count">
                      <span class="align-middle">
                        <i class="far fa-comment"></i>
                      </span>{" "}
                      06 Comments
                    </p>
                  </div>
                  <ul class="social-icons">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="navigation-area">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div class="thumb">
                        <a href="#">
                          <img class="img-fluid" src={prewiew} alt="" />
                        </a>
                      </div>
                      <div class="arrow">
                        <a href="#">
                          <span class="lnr text-white ti-arrow-left"></span>
                        </a>
                      </div>
                      <div class="detials">
                        <p>Prev Post</p>
                        <a href="#">
                          <h4>Space The Final Frontier</h4>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div class="detials">
                        <p>Next Post</p>
                        <a href="#">
                          <h4>Telescopes 101</h4>
                        </a>
                      </div>
                      <div class="arrow">
                        <a href="#">
                          <span class="lnr text-white ti-arrow-right"></span>
                        </a>
                      </div>
                      <div class="thumb">
                        <a href="#">
                          <img class="img-fluid" src={next} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-author">
                <div class="media align-items-center">
                  <img src={authorImg} alt="" />
                  <div class="media-body">
                    <a href="#">
                      <h4>Harvard milan</h4>
                    </a>
                    <p>
                      Second divided from form fish beast made. Every of seas
                      all gathered use saying you're, he our dominion twon
                      Second divided from
                    </p>
                  </div>
                </div>
              </div>
              <div class="comments-area">
                <h4>05 Comments</h4>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src={comentImg} alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Emilly Blunt</a>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase">
                              reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src={comentImg} alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Emilly Blunt</a>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase">
                              reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src={comentImg} alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Emilly Blunt</a>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase">
                              reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-form">
                <h4>Leave a Reply</h4>
                <form
                  class="form-contact comment_form"
                  action="#"
                  id="commentForm"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control w-100"
                          name="comment"
                          id="comment"
                          cols="30"
                          rows="9"
                          placeholder="Write Comment"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="website"
                          id="website"
                          type="text"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <a href="#" class="btn_3 button-contactForm">
                      Send Message
                    </a>
                  </div>
                </form>
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
                            <i class=" fas fa-search"></i>
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
                        <p>(21)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Health Care</p>
                        <p>(21)</p>
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
                        <img class="img-fluid" src={post1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img class="img-fluid" src={post1} alt="" />
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
    </div>
  );
}

export default SingleBlogPage;
