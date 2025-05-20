import productImg1 from "../../../assets/img/innerpage/product-img1.jpg";
import productImg2 from "../../../assets/img/innerpage/product-img6.jpg";
import paypalImg from "../../../assets/img/innerpage/icon/payPal.svg";
import stripeImg from "../../../assets/img/innerpage/icon/stripe.svg";
import offlineImg from "../../../assets/img/innerpage/icon/offline.svg";
import { useState } from "react";

const arrData = [
  {
    id: 1,
    title: "Air Pod Pro",
    price: "$234",
    image: productImg1,
    quantity: 1,
  },
  {
    id: 2,
    title: "Dove Beauty Cream",
    price: "$150",
    image: productImg2,
    quantity: 1,
  },
];

function Billing() {
  const [counter, setCounter] = useState({});
  const handleIncrement = (productId) => {
    console.log(productId);
    setCounter((prevCount) => ({
      ...prevCount,
      [productId]: (prevCount[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    console.log(productId);
    if (counter[productId] > 1) {
      setCounter((prevCount) => ({
        ...prevCount,
        [productId]: prevCount[productId] - 1,
      }));
    }
  };
  return (
    <div className="checkout-page scroll-margin pt-120 pb-120" id="shop">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-7">
            <div className="checkout-form-wrapper">
              <div className="checkout-form-title">
                <h4>Billing Information</h4>
              </div>
              <div className="checkout-form">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Full Name*</label>
                        <input
                          type="text"
                          placeholder="Daniel Scoot"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Phone*</label>
                        <input
                          type="text"
                          placeholder="(212)+ 455 645 678"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Email Address (Optional)</label>
                        <input
                          type="email"
                          placeholder="info@gmail.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Your Location</label>
                        <input
                          type="text"
                          placeholder="Type Location"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Street Address*</label>
                        <input
                          type="text"
                          placeholder="Street address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Postal Code*</label>
                        <input type="text" placeholder="Postal code" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Short Notes*</label>
                        <textarea
                          placeholder="Write Something..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          required
                          type="checkbox"
                          id="contactCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="contactCheck1"
                        >
                          Save my information for next time when I purchased
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="checkout-form-wrapper">
              <div className="checkout-form-title">
                <h4>Order Summary</h4>
              </div>
              <div className="checkout-form">
                <form>
                  <div className="cart-menu">
                    <div className="cart-body">
                      <ul>
                        {arrData.map((item) => (
                          <li className="single-item" key={item.id}>
                            <div className="item-area">
                              <div className="main-item">
                                <div className="item-img">
                                  <img src={item.image} alt />
                                </div>
                                <div className="content-and-quantity">
                                  <div className="content">
                                    <div className="price-and-btn d-flex align-items-center justify-content-between">
                                      <span>{item.price}</span>
                                      <button
                                        type="reset"
                                        className="close-btn"
                                      >
                                        <i className="bi bi-x"></i>
                                      </button>
                                    </div>
                                    <h6>
                                      <a href="product-details.html">
                                        {item.title}
                                      </a>
                                    </h6>
                                  </div>
                                  <div className="quantity-area">
                                    <div className="quantity">
                                      <a
                                        className="quantity__minus"
                                        onClick={() => handleDecrement(item.id)}
                                      >
                                        <span>
                                          <i className="bi bi-dash"></i>
                                        </span>
                                      </a>
                                      <input
                                        name="quantity"
                                        type="text"
                                        className="quantity__input"
                                        value={counter[item.id] || 1}
                                      />
                                      <a
                                        className="quantity__plus"
                                        onClick={() => handleIncrement(item.id)}
                                      >
                                        <span>
                                          <i className="bi bi-plus"></i>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="cart-footer">
                      <div className="pricing-area">
                        <ul>
                          <li>
                            <span>Sub Total</span>
                            <span>$468</span>
                          </li>
                          <li>
                            <span>Offer (20%)</span>
                            <span>$56</span>
                          </li>
                        </ul>
                        <ul className="total">
                          <li>
                            <span>Total</span>
                            <span>$425</span>
                          </li>
                        </ul>
                      </div>
                      <div className="choose-payment-method">
                        <h6>Select Payment Method</h6>
                        <div className="payment-option">
                          <ul>
                            <li className="paypal active">
                              <img src={paypalImg} alt />
                              <div className="checked">
                                <i className="bi bi-check"></i>
                              </div>
                            </li>
                            <li className="stripe">
                              <img src={stripeImg} alt />
                              <div className="checked">
                                <i className="bi bi-check"></i>
                              </div>
                            </li>
                            <li className="offline">
                              <img src={offlineImg} alt />
                              <div className="checked">
                                <i className="bi bi-check"></i>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="pt-25"
                          id="StripePayment"
                          style={{ display: "none" }}
                        >
                          <div className="row g-4">
                            <div className="col-md-12">
                              <div className="form-inner">
                                <label>Card Number</label>
                                <input
                                  type="text"
                                  placeholder="1234 1234 1234 1234"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner">
                                <label>Expiry</label>
                                <input type="text" placeholder="MM/YY" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner">
                                <label>CVC</label>
                                <input type="text" placeholder="CVC" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="primary-btn1"
                        data-text="Place Your Order"
                      >
                        <span>Place Your Order</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
