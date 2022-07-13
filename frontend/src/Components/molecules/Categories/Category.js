import React from 'react';
import '../../../Pages/Styles/Style.scss';
import './Category.scss';

function Category({ src, alt, category }) {
  return (
    
    
    
    <div className="category_item border-radius">
      <div className="category_img img-fluid">
        <img src={src} alt={alt}></img>
      </div>
      <div className="category_item_detail">
        <h3 className="category_name">{category}</h3>
      </div>
    </div>
  
  );
}

export default Category;
