import React, { useEffect, useState } from 'react';
import './Final.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import success from '../Img/success.png';
import burger_driver from '../Img/burger_driver.png';


const Final = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const order = useSelector((state) => state.order.orders);

  const [promocode, setPromocode] = useState();

  useEffect(() => {
    if (cart.total > 100) {
      setPromocode((0.1 * cart.total).toFixed(0));
    } else {
      setPromocode(0);
    }
  });

  const total_promcode = cart.total - promocode;

  const amount = total_promcode;

  return (
    <div className="container">
      <div className="final_wrapper">
        <div className="final_box border-radius box-shadow">
          <div className="final_order_logo">
            <img src={success} className="img-fluid img_success"></img>
            <h1 className="h1_success">Order successfully Placed.</h1>
            <p className="p_success">
              Your order is being processed by our Delivery team!
            </p>
          </div>
          <div className="order_details">
            <h3 className="order_details_text">ORDER DETAILS</h3>

            <div className="user_order_detail">
              <div className="user_order_detail_text">
                <div>
                  <h3>USER </h3>
                </div>
                <div> {user.full_name}</div>
              </div>
              <div className="user_order_detail_text">
                <div>
                  <h3>ADDRESS </h3>
                </div>
                <div> {user.address}</div>
              </div>
              <div className="user_order_detail_text">
                <div>
                  <h3>PHONE </h3>
                </div>
                <div> {user.phone}</div>
              </div>
              <div className="user_order_detail_text products_mobile">
                <div>
                  <h3>PRODUCTS </h3>
                </div>
                <div className="products ">
                  {cart.products.map((item) => (
                    <>
                      <div>
                        <p>
                          {' '}
                          {item.quantity}- {item.product.name}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div className="user_order_detail_text">
                <div>
                  <h3>
                    {' '}
                    <span>TOTAL</span>{' '}
                  </h3>
                </div>
                <div>
                  <span> {amount} €</span>
                </div>
              </div>
            </div>
          </div>
          <div className="final_order_logo">
            <img src={burger_driver} className="img-fluid car_image"></img>

            <p className='order_thankyou'>THANK YOU!</p>

            <button
              className="btn btn_order_page"
              onClick={() => navigate('/menu')}
              type="submit"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
