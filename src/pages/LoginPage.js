import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlelogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    };
    const response = await fetch(
      `http://localhost:1337/api/auth/local`,
      requestOptions
    );
    const responseData = await response.json();

    if (responseData.error) {
      alert("invalid user and password");
    } else {
      setEmail("");
      setPassword("");
      auth.setToken(responseData.jwt);
      localStorage.setItem("token", responseData.jwt);
      navigate("/");
    }
  };

  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>Login Page</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="login_part padding_top">
        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-lg-6 col-md-6"
              style={{ backgroundColor: "#fd3f3cf7" }}
            >
              <div class="login_part_text text-center">
                <div class="login_part_text_iner">
                  <h2>New to our Shop?</h2>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>

                  <Link to={"/signup"}>
                    <a href="#" class="btn_3">
                      Create an Account
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="login_part_form">
                <div class="login_part_form_iner">
                  <h3>
                    Welcome Back ! <br />
                    Please Sign in now
                  </h3>

                  <div class="col-md-12 form-group p_star">
                    <label>Email address</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <label>Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account d-flex align-items-center">
                      <input type="checkbox" id="f-option" name="selector" />
                      <label for="f-option">Remember me</label>
                    </div>
                    <button
                      type="submit"
                      onClick={handlelogin}
                      value="submit"
                      class="btn_3"
                    >
                      log in
                    </button>
                    <a class="lost_pass" href="#">
                      forget password?
                    </a>
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

export default LoginPage;
