import React, { useEffect, useState } from 'react';
import '../../../Pages/Styles/Style.scss';
import './MenuMolecule.scss';
import Button from '../../atoms/button';
import { addProduct } from '../../../Pages/Redux/cartRedux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../../requestMethods';


const MenuMolecule = (props) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({
        product: props.product,
        quantity: 1,
        price: props.product.price,
      })
    );
  };

  return (
    <div className="row_products box-shadow border-radius">
      <img
        className="img-fluid"
        src={props.product.img}
        alt={props.product.alt}
      />

      <div className="product_box">
        <>
          <h3>{props.product.name}</h3>
          <p className="p_weight">{props.product.weight}</p>

          <div className="price">
            <h3 className="price_text_menu"> {props.product.price} €</h3>
          </div>
        </>
        <div>
          <Button
            className="btn btn-add_to_cart"
            text="Add to Cart"
            type="submit"
            onClick={handleClick}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MenuMolecule;
