import React from "react";
import './About-us.scss';
import foodtruck from '../Img/foodimage.png';
import Button from "../../Components/atoms/button";
import { useNavigate } from "react-router-dom";
import footer from "../Img/footer.png";
import phone from '../Img/phone.png';
import icon from '../Img/Icon.png';
import fork from '../Img/fork.png';
const AboutUs = () => {
    const navigate = useNavigate();

    return(

        <div className="container">
        <div className="fullproject">
        <div className="Container1">
            <div className="left1">
            <h2 className="foodtextaboutus">Best food in town</h2>
          <p className="p_maestro1">
            Restaurants provide you with different cuisines of food to satisfy your hunger.
            The food preparation and presentation gives you a happy feel during your dull
            The ambiance that a restaurant provides you with gives one all the more reason to visit to cherish their time.
            </p>
        <div className="inside">
            <h2 className="text4">Free delivery</h2>
                <Button
                  className="btn1"
                  text="Order now"
                  type="submit"
                  onClick={() => navigate('/menu')}
                  ></Button>
         </div>
         </div>
          <div className="right1">
              <img src={foodtruck} alt="foodorder" className="foodorder"/>
         </div>
         </div>
        <div className="Container3">
            <h2 className="text44">The business of good Food</h2>
        </div>
        <div className="Container2">
             <h2 className="Container2text">A healthy, flavorful meal with the nutty taste of red quinoa, the creamy texture of avocado, and the sweetness of strawberries. Finished with the crunch of toasted sliced almonds. That’s a meal! Thaw avocado halves according to package instructions. Cut each half into slices, about 6 slices per half. Prepare red quinoa according to instructions,We aim to continuously add new innovative products and services to our offering to enrich the customer experience and help the outlets to retain a lead in the take away delivery sector.</h2>
             <h2 className="Container2textt">Fast Food Sites mission is to provide smart and easy to use websites to the food delivery businesses such as fast food and takeaway to help independent venues to provide the same level of service as the global food ordering sites. We believe there is a mutual benefit in forging such relationship with the food delivery outlets and it will enable healthier growth for both us and our customers who will not be forced to offer a large portion of their income to global food ordering companies in order to access the similar service.</h2>
        </div>
        <div className="Container3">
            <h2 className="text44">How to order online</h2>
        </div>
        <div className="Container4">
          
        <div className="first">
              <img src={phone} className="phoneimage" alt="phone"/>
              <h1 className="orderapp">Order wia app</h1>
              <h3 className="orderapptext">In the artist's own experience, of course, art is fundamentally indefinable unsayable; there is something sacred about its demands</h3>
        </div>
        <div className="first">
              <img src={icon} className="icon" alt="icon"/>
              <h1 className="orderapp">Choose food</h1>
              <h3 className="orderapptext">In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands</h3>
        </div>
        <div className="first">
             <img src={fork} className="forkimage" alt="forkimage"/>
             <h1 className="orderapp">Enjoy your food</h1>
             <h3 className="orderapptext">In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands</h3>
        </div>
        </div>
       <div className="footer1">
       <div className="left">
       <div >
       <div className="footerlefttext"> 
            <h1 className="lefttext">Fast food Order</h1>
            <h2 className="text444">Free delivery</h2>
      <div className="footertext">
           <h2 className="footertext1">901-947 South Drive, Houston, TX 77057, USA</h2>
           <h2 className="footertext1">Email: foodorder@gmail.com</h2>
           <h2 className="footertext1">Fax: +1 555 4444</h2>
           <h2 className="footertext1">Telephone: +1 555 1234</h2>
           </div>
           <div className="copyright">
           <h2 className="footertext2">Copyright © 2022 Food Order. All rights reserved.</h2> 
           </div>
      
      </div>
      </div>
      </div>
      <div className="right">
      <div className="footerrighttext">
           <h1 className="righttext11">Fast food restaurant</h1>
           <h2 className="righttext11">Free delivery</h2>
      </div>
      <div className="footerbutton">
                  <Button
                  className="btn11"
                  text="Shop now"
                  type="submit"
                  onClick={() => navigate('/menu')}
                ></Button>
      </div>
      </div>
      </div>
      </div>
      </div>
        )} 
        



export  default AboutUs;