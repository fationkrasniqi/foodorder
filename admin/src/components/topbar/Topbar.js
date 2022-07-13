import React from 'react';
import './Topbar.scss';
import logo_name from '../../assets/logo_name.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/apiCalls';

export default function Topbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate('/');
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link exact to="/" className="logo">
            <img src={logo_name} alt="" />
          </Link>
        </div>
        <div className="topRight">
          <Link to="/newuser">
            <button className="productAddButton">Create User</button>
          </Link>
          <Link to="/newproduct">
            <button className="productAddButton">Create Product</button>
          </Link>

          <div className="admin_avatar">
            <img src={user.img} alt={user.username} className="TopAvatar" />
            <div className="user_name">
              <h5>{user.username}</h5>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
