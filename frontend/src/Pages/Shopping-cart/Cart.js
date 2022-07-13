import React from 'react';
import IncDecCounter from '../../Components/atoms/IncDecCounter';

import './Cart.scss';
import shoppingCart from '../Img/shopping2.png';

function Cart(props) {
  return (
    <div className="warpper-order">
      <div className="shopping-cart-item-dec">
        <div className="item-text">
          <span className="item-details-dec">
            <p className="item-name-order">{props.data.name}</p>
            <p className="item-descreption-box">{props.data.price}</p>
          </span>
          <div className="counter-wrapper-inc">
            <img src={shoppingCart} alt="" />
            <span className="quantity-number-1">1</span>
            <IncDecCounter />
          </div>
        </div>

        <div className="img1-wrapper">
          <img className="img-fluid_cart" src={props.data.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
