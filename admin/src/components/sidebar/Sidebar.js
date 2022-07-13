import React from 'react';
import './Sidebar.scss';
import { MdOutlineLineStyle, MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/apiCalls';
import { MdOutlinePermIdentity } from 'react-icons/md';
import { MdOutlineStorefront } from 'react-icons/md';

export default function Sidebar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate('/');
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <MdOutlineLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <MdOutlinePermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className="sidebarListItem">
                <MdOutlineShoppingCart className="sidebarIcon" />
                Orders
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="logout_admin">
        <button className="button_logout" onClick={handleClick}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}
