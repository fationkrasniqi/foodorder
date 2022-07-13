import React, { useState } from 'react';
import Button from '../../Components/atoms/button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import { FaUser, FaUnlockAlt } from 'react-icons/fa/';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/apiCalls';
import axios from 'axios';
import { user, loginSuccess } from '../Redux/userRedux';

const Login = ({ updateUser }) => {
  const [username, setUsername] = useState({
    username: '',
    password: '',
  });
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsername({
      ...username,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submitting', username);
    axios
      .post('http://localhost:5001/api/auth/login', username)
      .then((res) => {
        console.log('res', res);
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        setMessage('Not a member?');
      });
    navigate('/profile');
  };
  return (
    <div className="container">
      <div className="login_test border-radius box-shadow">
        <h2 className="welcome_text">LOGIN</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="test">
            <div className="input-container">
              <span className="user-message">{message}</span>
              <input
                type="text"
                name="username"
                required
                value={username.username}
                className="input__field "
                placeholder="Enter your Username"
                onChange={handleChange}
              />
              <i className="login__icon">
                <FaUser />
              </i>
            </div>

            <div className="input-container">
              <i className="login__icon2"></i>
              <input
                type="password"
                name="password"
                required
                value={username.password}
                id="password"
                className="input__field"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
              <i className="login__icon">
                <FaUnlockAlt />
              </i>
            </div>
            <div className="button_login">
              <Button
                type="submit"
                text="LOGIN"
                className="btn btn_login"
              ></Button>
            </div>
            <div className="Singup">
              <h4 className="singup_text">
                Not a member? <Link to={'/register'}>Register</Link>{' '}
              </h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
