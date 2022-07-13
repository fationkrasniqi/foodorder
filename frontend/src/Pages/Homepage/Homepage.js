import React from 'react';
import PizaOfDay from '../PizaOfDay/PizaOfDay';
import './Homepage.scss';
import MaestroPizza from '../MaestroPizza/MaestroPizza';
import MaestroSalad from '../MaestroSalad/MaestroSalad';
import Button from '../../Components/atoms/button';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="header_container">
        <div className="header_img ">
          <div className="header-1">GOODBYE JUST FOOD.</div>
          <div className="header-2">HELLO SUPER HEALTHY MEALS.</div>
          <div className="hungry">
            <Button
              className="btn-show-more-1"
              text="I'm hungry"
              type="submit"
              onClick={() => navigate('/menu')}
            ></Button>
          </div>
        </div>
      </section>
      <MaestroPizza />
      <PizaOfDay />
      <MaestroSalad />
    </>
  );
};

export default Homepage;
