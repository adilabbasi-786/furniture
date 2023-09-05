import React, { useEffect, useState } from "react";
import banner from "../assests/banner_img.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const getData = async () => {
    let req = await fetch("http://localhost:1337/api/banners?populate=*");
    let res = await req.json();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <section class="banner_part">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="banner_slider owl-carousel">
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  interval={3000}
                  infiniteLoop={true}
                >
                  {data.map((item) => (
                    <div>
                      <div class="single_banner_slider">
                        <div class="row">
                          <div class="col-lg-5 col-md-8">
                            <div class="banner_text">
                              <div class="banner_text_iner">
                                <h1>{item?.attributes?.title}</h1>
                                <p>{item?.attributes?.desc}</p>
                                <a href="#" class="btn_2">
                                  buy now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="banner_img d-none d-lg-block">
                            <img
                              src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>

              <div class="slider-counter"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
