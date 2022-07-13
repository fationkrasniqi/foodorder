import React, { useState } from 'react';
import { FaUser, FaUnlockAlt } from 'react-icons/fa/';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import './Login.scss';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="container">
      <div className="login_test box-shadow">
        <h2 className="welcome_text ">LOGIN</h2>

        <form className="login_form">
          <div className="test">
            <div className="input-container">
              <input
                name="email"
                required
                className="input__field "
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <i className="login__icon">
                <FaUser className='FaUser ' />
              </i>
            </div>

            <div className="input-container">
              <i className="login__icon2"></i>
              <input
                type="password"
                name="password"
                required
                id="password"
                className="input__field"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="login__icon">
                <FaUnlockAlt className='FaUnlockAlt'/>
              </i>
            </div>
            <div className="button_login">
              <button className="btn_login box-shadow" onClick={handleClick}>
                LOGIN
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
