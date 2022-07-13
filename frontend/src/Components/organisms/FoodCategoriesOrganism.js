import React, { useState } from 'react';
// import '../../Pages/Styles/Login.scss';
// import '../../Pages/Styles/FoodCategories.scss';
import { useNavigate } from 'react-router-dom';
import FoodCategoriesMolecule from '../molecules/FoodCategoriesMolecule';
import dessert from '../../Pages/Img/dessert.jpg';
import salad from '../../Pages/Img/salad-1.jpg';
import salad2 from '../../Pages/Img/salad-2.jpg';
import spaghetti from '../../Pages/Img/spaghetti.jpg';
import drinks from '../../Pages/Img/drinks.jpg';
import Header from '../../Pages/Header/Header';




const FoodCategoriesOrganism = () => {
  const navigate = useNavigate();
  const [foodImg, setFood] = useState([
    { name: '/menu', img: salad, alt: 'Salads' },
    { name: '/menu', img: spaghetti, alt: 'Pasta' },
    { name: '/menu', img: salad2, alt: 'Salads' },
    { name: '/menu', img: dessert, alt: 'Dessert' },
    { name: '/menu', img: drinks, alt: 'Drinks' },
  ]);

  const handleClick = (name) => navigate(name);

  return (
    <>
    <Header></Header>
  
    <div className="container_food_categories">
      <div className="FoodCategoriesOrganism_container">
        <h3 className="h3_foodCategory"> FOOD CATEGORIES</h3>
        <div className="row_food">
          {foodImg.map((food) => (
            <FoodCategoriesMolecule
              key={food.id}
              name={food.name}
              src={food.img}
              alt={food.alt}
              className="img-fluid"
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FoodCategoriesOrganism;
