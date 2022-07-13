import React from 'react';
import Button from '../../Components/atoms/button';
import Ghost from '../Img/ghost-img.png';
import { useNavigate } from 'react-router-dom';
import "../Pagenotfound/Pagenotfound.scss";




function Pagenotfound() {
    const navigate = useNavigate();
return (
<div className='container container_pageNotFound'>
    <div className='notfound'>
        <div className='data'>
            <h1 className="error">ERROR 404</h1>
            <h1 className="heybuddy">Hey Buddy</h1>
            <h1 className='wecant'>We can't seem to find the page you are looking  for</h1>
            <Button className='buton3'
            type="submit"
            text="Go Home"
            onClick={() => navigate('/menu')}
            ></Button>
        </div>

        {/* <div classname="image-alien">
        <img  className='alien img-fluid' src={Ghost}></img>
        </div>  */}
        <div className='image-alien'>
        <img  className='alien img-fluid' src={Ghost}></img>
        </div>
   
   
  
        
    </div>
      
    </div>



 
       
       
)
 
  
  
}

export default Pagenotfound;