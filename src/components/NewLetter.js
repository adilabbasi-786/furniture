import React, { useState } from "react";
import p1 from "../assests/subscribe_area.png";
function NewLetter() {
  const [email, setEmail] = useState("");
  const handleClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { email: email },
      }),
    };
    const response = await fetch(
      `http://localhost:1337/api/newsletters`,
      requestOptions
    );
    const data = await response.json();
    setEmail("");
  };
  return (
    <div>
      <section class="subscribe_area section_padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="subscribe_area_text text-center">
                <h5>Join Our Newsletter</h5>
                <h2>Subscribe to get Updated with new offers</h2>
                <div class="input-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    class="form-control"
                    placeholder="enter email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <a
                      onClick={handleClick}
                      href=""
                      class="input-group-text btn_2"
                      id="basic-addon2"
                    >
                      subscribe now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewLetter;
