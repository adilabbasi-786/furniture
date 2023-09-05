import React from "react";
import logo1 from "../assests/client_logo/client_logo_1.png";
import logo2 from "../assests/client_logo/client_logo_2.png";
import logo3 from "../assests/client_logo/client_logo_3.png";
import logo4 from "../assests/client_logo/client_logo_4.png";
import logo5 from "../assests/client_logo/client_logo_5.png";

function Client() {
  return (
    <div>
      <section class="client_logo padding_top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="single_client_logo">
                <img src={logo1} alt="" />
              </div>
              <div class="single_client_logo">
                <img src={logo2} alt="" />
              </div>
              <div class="single_client_logo">
                <img src={logo3} alt="" />
              </div>
              <div class="single_client_logo">
                <img src={logo4} alt="" />
              </div>
              <div class="single_client_logo">
                <img src="img/client_logo/client_logo_5.png" alt="" />
              </div>
              <div class="single_client_logo">
                <img src="img/client_logo/client_logo_3.png" alt="" />
              </div>
              <div class="single_client_logo">
                <img src="img/client_logo/client_logo_1.png" alt="" />
              </div>
              <div class="single_client_logo">
                <img src="img/client_logo/client_logo_2.png" alt="" />
              </div>
              <div class="single_client_logo">
                <img src="img/client_logo/client_logo_3.png" alt="" />
              </div>
              <div class="single_client_logo">
                <img src="img/client_logo/client_logo_4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;
