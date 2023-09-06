import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Feature({ getProducts }) {
  const [category, setCategory] = useState([]);

  const getData = async () => {
    let req = await fetch("http://localhost:1337/api/categories?populate=*");
    let res = await req.json();
    setCategory(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <section class="feature_part padding_top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section_tittle text-center">
                <h2>Featured Category</h2>
              </div>
            </div>
          </div>
          <div class="row align-items-center justify-content-between">
            {category.map((item, index) => (
              <div
                key={index}
                className={`col-lg-${index % 2 === 0 ? "7" : "5"} col-sm-6`}
              >
                <Link to={`/allproducts?category_id=${item.id}`}>
                  <div class="single_feature_post_text">
                    <p>Premium Quality</p>
                    <h3>Latest foam {item?.attributes?.name}</h3>
                    <a href="#" class="feature_btn">
                      EXPLORE NOW <i class="fas fa-play"></i>
                    </a>
                    <img
                      src={`http://localhost:1337${item?.attributes?.img?.data?.attributes?.url}`}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
