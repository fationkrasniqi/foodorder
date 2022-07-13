// import React from 'react';

// function Button({ text, onClick, type, className }) {
//   return (
//     <button className={className} type={type} onClick={onClick}>
//      {text}
//     </button>
//   );
// }

// export default Button;
import React from 'react';


function Button ({ text, onClick, type,className }){
  return (
    <button
    className={className}
    type={type}
    onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;


// To implement this button follow:
// 1st:
// import Button from '../../Components/atoms/button';
// annd 2nd:
// <Button type="submit" text="TextYouWant" onClick={path} className="btn"></Button>
