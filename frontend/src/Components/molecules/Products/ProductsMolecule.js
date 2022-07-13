import React, { useState, useEffect } from 'react';
// import { MenuProducts_array } from '../../../Pages/Menu/products';
import '../../../Pages/Styles/Style.scss';
import './ProductsMolecule.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, deleteProduct } from '../../../Pages/Redux/cartRedux';
import { FaTrash } from 'react-icons/fa';

const ProductsMolecule = ({ product, productQuantity }) => {
  const [quantity, setQuantity] = useState(productQuantity);
  const [itemPrice, setItemPrice] = useState(
    parseInt(quantity) * parseFloat(product.price)
  );
  const dispatch = useDispatch();


  let user = useSelector((state) => state.user.currentUser)
  
  useEffect((e) =>{
    if(!user){
      localStorage.removeItem();  
    }
})
  

  const handleQuantity = (type) => {
    if (type === 'dec') {
      if (quantity > 1) {
        dispatch(
          changeQuantity({
            product,
            quantity: quantity - 1,
            price: product.price,
            isIncrement: false,
          })
        );
        setQuantity(quantity - 1);
      }
    } else {
      dispatch(
        changeQuantity({
          product,
          quantity: quantity + 1,
          price: product.price,
          isIncrement: true,
        })
      );
      setQuantity(quantity + 1);
    }
  };

  // me rrit cmimin e 1 produkti nbaze te sasise
  useEffect(() => {
    setItemPrice(parseInt(quantity) * parseFloat(product.price));
  }, [quantity]);

  const handleDelete = () => {
    dispatch(deleteProduct({ product, quantity, price: product.price }));
  };

  return (
    <div className="row_products box-shadow border-radius">
      <img className="img-fluid" src={product.img} alt="" />
      <div className="product_box">
        <h4>{product.name}</h4>
        <p className="p_weight">{product.weight}</p>
        <div className="quantity">
          <div className="quantity_box">
            <button
              className="btn btn-minus"
              type="button"
              onClick={() => handleQuantity('dec')}
            >
              -
            </button>
            {/* <span>{quantity}</span> */}
            <input
              type="tel"
              placeholder={product.quantity}
              value={quantity}
              // value={productQuantity}
              maxLength="3"
            />
            <button
              className="btn btn-plus"
              onClick={() => handleQuantity('inc')}
            >
              +
            </button>
          </div>
          <button className="btn btn-remove" onClick={() => handleDelete()}>
            <FaTrash
              style={{
                color: '#890606',
                height: '1em',
              }}
            ></FaTrash>
          </button>
        </div>
        <div className="price">
          <h3 className="price_text"> {itemPrice} €</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductsMolecule;
