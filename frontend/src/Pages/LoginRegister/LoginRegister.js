import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/atoms/button';
import './LoginRegister.scss';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="firstform">
      <h2 className='welcome_text'>WELCOME</h2>
      <div className="homepage_logo" />
      <div className="form">
        <Button
          type="submit"
          text="LOGIN"
          onClick={() => navigate('/login')}
          className="btn-new"
        ></Button>
        <div>
          <p1 className="or_homepage">or</p1>
        </div>

        <Button
          type="submit"
          text="REGISTER"
          onClick={() => navigate('/register')}
          className="btn-new"
        ></Button>
      </div>
    </div>
    </div>
  );
};

export default Homepage;
