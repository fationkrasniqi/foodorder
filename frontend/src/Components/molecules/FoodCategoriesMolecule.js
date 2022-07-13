import React from 'react';
import Button from '../atoms/button';

function FoodCategoriesMolecule({ src, alt, href, className, name, onClick }) {
  return (
    <div className="inner-box">
      <div className="card-img">
        <img src={src} alt={alt} href={href} className={className} />
        <Button
          type="submit"
          text="ORDER NOW"
          className="btn-order-1"
          onClick={() => onClick(name)}
        />
      </div>
    </div>
  );
}

export default FoodCategoriesMolecule;
