import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMenuOutline } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo_name from '../Img/logo_name.svg';
import './navbar.scss';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  let quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  if (!user) {
    quantity = 0;
  }
  // console.log(user.currentUser);
  console.log(user);
  return (
    <div className="container nav_container">
      <div className="header">
        <div className="header__logo">
          <Link exact to="/" className="nav-logo">
            <img src={logo_name} alt="" />
          </Link>
        </div>
        <nav className={active ? 'navbar active' : 'navbar'}>
          <ul>
            <div className="closed">
              <AiOutlineClose className="close" onClick={showMenu} />
            </div>

            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item1">
              <Link className="cart" to="/orders">
                <FaShoppingCart
                  style={{
                    color: 'white',
                    width: '.9em',
                  }}
                />
              </Link>
              <div className="cart_content">
                <span>{quantity}</span>
              </div>
            </li>
            <li className="nav-item">
              <Link className="fa-user" to="/profile">
                <FaUser></FaUser>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="changer">
          <IoMenuOutline className="menu" onClick={showMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
