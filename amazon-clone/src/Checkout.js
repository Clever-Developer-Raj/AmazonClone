import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="Checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          ></img>
        </Link>
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              // id="1234"
              // title="Test Product"
              // price="$11.2"
              // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              // rating="5*"
            />
          ))}
        </div>
      </div>

      <div className="Checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
