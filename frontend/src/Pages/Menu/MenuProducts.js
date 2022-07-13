import React, { useState, useEffect } from 'react';
import Category from '../../Components/molecules/Categories/Category';
import { categoryData } from '../../Components/molecules/Categories/categoryData';
import MenuMolecule from '../../Components/molecules/Products/MenuMolecule';
import './MenuProducts.scss';
import allFood from '../Img/allFood.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/apiCalls';

const MenuProducts = () => {
  const dispatch = useDispatch();

  const [searchInput, SetSearchInput] = useState('');

  const products = useSelector((state) => state.product.products);

  const [productData, setProductData] = useState(products);

  const filterResult = (category) => {
    const result = products.filter((selectedCategory) => {
      return selectedCategory.category === category;
    });
    setProductData(result);
  };

  const searchData = () => {
    return productData.filter(
      (menu) =>
        // menu.id.toLowerCase().includes(searchInput.toLowerCase()) ||
        menu.name.toLowerCase().includes(searchInput.toLowerCase()) 
        // menu.category.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="container">
      <div className="menus">
        <div className="categories">
          <div className="row_categories">
            <button onClick={() => setProductData(products)}>
              <div className="category_item border-radius">
                <div className="category_img img-fluid">
                  <img src={allFood} alt="All categories"></img>
                </div>
                <div className="category_item_detail">
                  <h3 className="category_name">All</h3>
                </div>
              </div>
            </button>
            {categoryData.map((food) => (
              <>
                <button onClick={() => filterResult(`${food.category}`)}>
                  <Category
                    key={food._id}
                    src={food.img}
                    alt={food.name}
                    category={food.category}
                  ></Category>
                </button>
              </>
            ))}
          </div>

          <div className="search_input">
            <form>
              <input
                type="text"
                id="search"
                className="search"
                placeholder="Search your food"
                value={searchInput}
                onChange={(e) => SetSearchInput(e.target.value)}
              />
              <input type="submit" value="Search" className="submit_search" />
            </form>
          </div>
        </div>
        <div className="row_menu">
          {searchData().map((food) => (
            <>
              <MenuMolecule
                id={food._id}
                key={food._id}
                product={food}
              ></MenuMolecule>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuProducts;
