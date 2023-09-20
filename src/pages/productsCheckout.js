import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import AppContext, { Context } from "../Context/CartContext";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProductsCheckout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [note, setNote] = useState("");
  const auth = useContext(AuthContext);
  const Cart = useContext(AppContext);

  const clickHandle = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({
        data: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          address: address,
          email: email,
          city: city,
          note: note,
          zipCode: zipCode,
        },
      }),
    };
    const response = await fetch(
      `http://localhost:1337/api/orders`,
      requestOptions
    );
    const data = await response.json();
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setCity("");
    setNote("");
    setPhoneNumber("");
    setZipCode("");
    alert("booking created succefully");
  };

  const {
    cartItems,
    handleRemoveFromCart,
    handleCartProductQuantity,
    cartSubTotal,
  } = useContext(Context);
  const shippingPrice = 50.0;
  const total = cartSubTotal + shippingPrice;
  return (
    <>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item">
                  <h2>Product Checkout</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="checkout_area padding_top">
        <div class="container">
          <div class="billing_details">
            <div class="row">
              <div class="col-lg-6">
                <h3>Billing Details</h3>
                <form
                  class="row contact_form"
                  action="#"
                  method="post"
                  novalidate="novalidate"
                >
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="first"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <span
                      class="placeholder"
                      data-placeholder="First name"
                    ></span>
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="last"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <span
                      class="placeholder"
                      data-placeholder="Last name"
                    ></span>
                  </div>

                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <span
                      class="placeholder"
                      data-placeholder="Phone number"
                    ></span>
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span
                      class="placeholder"
                      data-placeholder="Email Address"
                    ></span>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <select class="nice-select country_select">
                      <option value="1">Country</option>
                      <option value="2">Country</option>
                      <option value="4">Country</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="add1"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <span
                      class="placeholder"
                      data-placeholder="Address line 01"
                    ></span>
                  </div>

                  <div class="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      name="city"
                    />
                    <span
                      class="placeholder"
                      data-placeholder="Town/City"
                    ></span>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <select
                      class="country_select nice-select"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="rawalpidni">Rawalpindi</option>
                      <option value="lahore">Lahore</option>
                      <option value="karachi">karachi</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      value={zipCode}
                      placeholder="Postcode/ZIP"
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 form-group"></div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account">
                      <h3>Shipping Details</h3>
                    </div>
                    <textarea
                      class="form-control"
                      value={note}
                      id="message"
                      rows="1"
                      placeholder="Order Notes"
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="col-lg-6">
                <div class="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li>
                      <a href="# " style={{ fontWeight: "bold" }}>
                        Product
                        <span>Total</span>
                      </a>
                    </li>
                  </ul>
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <ul class="list">
                        <li>
                          <MdClose onClick={() => handleRemoveFromCart(item)} />{" "}
                          <Link to={`/singleproduct/${item.id}`}>
                            {item.attributes.title}
                            <span class="middle">
                              x {item.attributes.quantity}{" "}
                            </span>
                            <span class="last">
                              $
                              {item.attributes.quantity * item.attributes.price}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                  <ul class="list list_2">
                    <li>
                      <a href="#">
                        Subtotal
                        <span>${cartSubTotal}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Shipping
                        <span>Flat rate: ${shippingPrice.toFixed(2)}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Total
                        <span>${total.toFixed(2)}</span>
                      </a>
                    </li>
                  </ul>

                  {/* <div class="payment_item">
                    <div class="radion_btn">
                      <input type="radio" id="f-option5" name="selector" />
                      <label for="f-option5">Check payments</label>
                      <div class="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div class="payment_item active">
                    <div class="radion_btn">
                      <input type="radio" id="f-option6" name="selector" />
                      <label for="f-option6">Paypal </label>
                      <img src="img/product/single-product/card.jpg" alt="" />
                      <div class="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div> */}
                  <div class="creat_account">
                    <input type="checkbox" id="f-option4" name="selector" />
                    <label for="f-option4">I’ve read and accept the </label>
                    <a href="#">terms & conditions*</a>
                  </div>
                  <button class="btn_3" type="submit" onClick={clickHandle}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsCheckout;
