import React from 'react'
import Button from '../../Components/atoms/button'
import './PizaOfDay.scss'
import { useNavigate } from 'react-router-dom'
import Pasta_1 from '../Img/pasta44.jpg'
const PizaOfDay = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="shop">
        <div className='shop_wrapper'>
        <div className="shop_text">
          <div>
            <h1 className="pizza-h1">
              MEAL OF THE DAY
            </h1>
            <p className='pizza-p'> Only thing I am testing positive for is Pasta </p>
           
            <div className="pizza1">
              <Button
                className="pizza-button"
                text="SHOP NOW"
                type="submit"
                onClick={() => navigate('/menu')}></Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default PizaOfDay
