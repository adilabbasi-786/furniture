import React, { useContext } from "react";
// import sml1 from "../images/sml1.jpg";
import { MdClose } from "react-icons/md";
import { Context } from "../Context/CartContext";

function CartItem() {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <>
      <p class="fables-second-text-color semi-font mb-4 font-17">
        Shopping Cart
      </p>
      {cartItems.map((item) => (
        <div class="row mx-0 mb-3" key={item.id}>
          <div class="col-4 p-0">
            <MdClose onClick={() => handleRemoveFromCart(item)} />
            <a href="#">
              <img
                src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
                alt=""
                class="w-100"
              />
            </a>
          </div>
          <div class="col-8">
            <h2>
              <a
                href="#"
                class="fables-main-text-color font-13 d-block fables-main-hover-color"
              >
                {item.attributes.title}{" "}
              </a>
            </h2>

            <p class="fables-second-text-color font-weight-bold">
              {item.attributes.quantity} x{" "}
              {item.attributes.quantity * item.attributes.price}
            </p>
            <div>
              <div class="fables-calc fables-light-background-color fables-btn-rouned">
                <div>
                  <span
                    onClick={() => handleCartProductQuantity("dec", item)}
                    class="calc-btn minus fables-forth-text-color float-left calc-width mt-2"
                    id="decrement"
                  >
                    -
                  </span>
                </div>
                <span class="calc-width" id="total_count">
                  <p
                    class="fables-forth-text-color"
                    style={{ fontSize: "15px" }}
                  >
                    {item.attributes.quantity}
                  </p>
                </span>
                <span
                  class="calc-btn plus fables-forth-text-color float-right calc-width mt-2"
                  onClick={() => handleCartProductQuantity("inc", item)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
