import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>Signup Page</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="login_part padding_top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="login_part_form">
                <div class="login_part_form_iner">
                  <h3>
                    Welcome Back ! <br />
                    Please Register yourself in now
                  </h3>
                  <form
                    class="row contact_form"
                    action="#"
                    method="post"
                    novalidate="novalidate"
                  >
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        value=""
                        placeholder="Username"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="first name"
                        name="first name"
                        value=""
                        placeholder="First name"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        value=""
                        placeholder="Last name"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        value=""
                        placeholder="password"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        value=""
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <div class="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label for="f-option">Remember me</label>
                      </div>
                      <button type="submit" value="submit" class="btn_3">
                        signup
                      </button>
                      <Link to={"/login"}>
                        <a class="lost_pass" href="#">
                          Log in
                        </a>
                      </Link>
                    </div>
                  </form>
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

export default Register;
