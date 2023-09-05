import React, { useState, useEffect } from "react";
import offerimg from "../assests/offer_img.png";

function SaleOffer() {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate = new Date("2023-09-15T00:00:00").getTime(); // Replace with your offer's end date
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <section class="our_offer section_padding">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 col-md-6">
              <div class="offer_img">
                <img src={offerimg} alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="offer_text">
                <h2>Weekly Sale on 60% Off All Products</h2>
                <div class="date_countdown">
                  <div id="timer">
                    <div id="days" class="date">
                      {timeLeft.days}
                    </div>
                    <div id="hours" class="date">
                      {timeLeft.hours}
                    </div>
                    <div id="minutes" class="date">
                      {timeLeft.minutes}
                    </div>
                    <div id="seconds" class="date">
                      {timeLeft.seconds}
                    </div>
                  </div>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <a
                      href="#"
                      class="input-group-text btn_2"
                      id="basic-addon2"
                    >
                      book now
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

export default SaleOffer;
