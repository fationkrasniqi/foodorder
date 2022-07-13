import React from "react";
// import "./Maestro.scss";
import "./MaestroPizza.scss";
import Pasta from '../Img/meat.jpg'



const MaestroPizza = () => {
 return (
    <>
      <div className="container">
      <div className="about-2">
        <div className="card grow">
      <div className="text-card_maestro">
          <h1 className="maestro">Best chicken in town!</h1>
          <p className="p_maestro">
            Restaurants provide you with different cuisines of food to satisfy your hunger.
            The food preparation and presentation gives you a happy feel during your dull
            The ambiance that a restaurant provides you with gives one all the more reason to visit to cherish their time.
            </p>
        </div>
        <div className="photo-card ">
          <img src={Pasta} alt="Pizza" className="border-radius box-shadow"/>
        </div>
    </div>
    </div>
</div>
 </>
);
};

export default MaestroPizza


