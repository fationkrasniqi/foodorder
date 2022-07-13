import React ,{useState} from 'react'
import '../../Pages/Shopping-cart/Cart.scss'


function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <div className="quantity-orderbox">
      <button className="btn-dec" type="button" onClick={decNum}>-</button>
      <div className='input'>
        <input type="text"  className="form-control" value={num+`$`} onChange={handleChange}/>
      </div>
      <button className="btn-dec" type="button" onClick={incNum}>+</button>
    </div>
  );
}

export default IncDecCounter;