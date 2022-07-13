import React from "react";
import "./MaestroSalad.scss";
import Salad from '../Img/3.jpg'

const Content2 = () => {
 return (
    <>
      <div className="container">
      <div className="about-2">
      <div className="card_content grow_content">
      <div className="text-card_content">
      <h2> Welcome to Maestro Salad</h2>
      <p className="p_maestro_content">
        A healthy, flavorful meal with the nutty taste of red quinoa, the creamy texture of avocado, and the sweetness of strawberries. Finished with the crunch of toasted sliced almonds. 
        That’s a meal!
        Thaw avocado halves according to package instructions. Cut each half into slices, about 6 slices per half.
        Prepare red quinoa according to instructions.
      </p>
      </div>
      <div className="photo-card_content  ">
        <img src={Salad} alt="Salad" className="border-radius box-shadow"/>
      </div>
      </div>
      </div>
      </div>
    
    </>
    
  );
};

export default Content2