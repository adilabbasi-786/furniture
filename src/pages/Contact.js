import React, { useEffect, useState } from "react";

function Contact() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let req = await fetch("http://localhost:1337/api/contacts?populate=*");
    let res = await req.json();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    // Initialize the map
    function initMap() {
      const uluru = { lat: -25.363, lng: 131.044 };
      const grayStyles = [
        {
          featureType: "all",
          stylers: [{ saturation: -90 }, { lightness: 50 }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#ccdee9" }],
        },
      ];
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -31.197, lng: 150.744 },
        zoom: 9,
        styles: grayStyles,
        scrollwheel: false,
      });

      // Add a marker
      const marker = new window.google.maps.Marker({
        position: uluru,
        map: map,
      });
    }

    // Load Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>contact us</h2>
                  <p>
                    Home <span>-</span> contact us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-section padding_top">
        <div class="container">
          <div class="d-none d-sm-block mb-5 pb-4">
            <div id="map" style={{ height: "480px" }}></div>
          </div>

          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Get in Touch</h2>
            </div>
            <div class="col-lg-8">
              <form
                class="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder="Enter Message"
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
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
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
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
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
            {data.map((item) => (
              <div class="col-lg-4">
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class=" fas fa-home"></i>
                  </span>
                  <div class="media-body">
                    <h3>{item?.attributes?.address}</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="fas fa-tablet"></i>
                  </span>
                  <div class="media-body">
                    <h3>{item?.attributes?.phone_number}</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <div class="media-body">
                    <h3>{item?.attributes?.email}</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
