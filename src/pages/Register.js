import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const clickHandle = async () => {
    if (confirmPassword !== password) {
      alert("password and confirm password should be same");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        username: username,
      }),
    };
    const response = await fetch(
      "http://localhost:1337/api/auth/local/register",
      requestOptions
    );
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.error) {
      alert("type another usename or password or email");
    } else {
      setFirstName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLastName("");
      setUsername("");
      auth.setToken(responseData.jwt);

      navigate("/");
    }
    console.log(auth);
  };
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
            <div
              class="col-lg-6 col-md-6 "
              style={{ display: "grid", placeItems: "center", left: "25%" }}
            >
              <div
                class="login_part_form"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "1px 1px 10px rgba(0,0,0,.16)",
                  paddingBottom: "20px",
                  paddingTop: "30px",
                  width: "520px",
                }}
              >
                <div class="login_part_form_iner">
                  <h3>
                    Welcome Back ! <br />
                    Please Register yourself
                  </h3>

                  <div class="col-md-12 form-group p_star">
                    <label>First Name</label>
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      type="first name"
                      className="form-control mt-1"
                      placeholder="Enter your First Name"
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <label>Last Name</label>
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      type="last name"
                      className="form-control mt-1"
                      placeholder="Enter your Last Name"
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <label>user Name</label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      type="last name"
                      className="form-control mt-1"
                      placeholder="Enter your Last Name"
                    />
                  </div>
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
                      value={password}
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <label>Confirm Password</label>
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
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
                    <button type="submit" class="btn_3" onClick={clickHandle}>
                      signup
                    </button>
                    <Link to={"/login"}>
                      <a class="lost_pass" href="#">
                        Log in
                      </a>
                    </Link>
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

export default Register;
