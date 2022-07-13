import React, { useEffect, useState } from 'react'
import './Orders.scss'
import '../../Pages/Styles/Style.scss'
import ProductsMolecule from '../../Components/molecules/Products/ProductsMolecule'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../../requestMethods'
import { addOrder } from '../Redux/apiCalls'
import Button from '../../Components/atoms/button'
const Orders = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const user = useSelector((state) => state.user.currentUser)

  const { full_name, username, _id, address, img, phone } = user

  const KEY = process.env.REACT_APP_STRIPE
  const [stripeToken, setStripeToken] = useState(null)
  const products = useSelector((state) => state.cart.products)
  const [promocode, setPromocode] = useState()

  console.log(username)
  useEffect(() => {
    if (cart.total > 100) {
      setPromocode((0.1 * cart.total).toFixed(0))
    } else {
      setPromocode(0)
    }
  })
  
  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('checkout/payment', {
          tokenId: stripeToken.id,
          amount: total_promcode * 100,
        })
        navigate('/', {
          stripeData: res.data,
          products: cart,
        })
      } catch {}
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.total, navigate])

  const total_promcode = cart.total - promocode

  const amount = total_promcode

  console.log(cart)

  const payCash = (e) => {
    const order = {
      full_name: full_name,
      username: username,
      userId: _id,
      userImg: img,
      products: products,
      total: cart.total,
      promocode: promocode,
      amount: amount,
      address: address,
      phone: phone,
    }
    addOrder(order, dispatch)
    console.log(order)
    navigate('/final')
  }

  return (
    <div className="container">
      <div className="orders">
        {cart.products.length === 0 ? (
          <div className="message_order">
            <div className="message border-radius ">
              <h3 className="message_text">
                Upss. There is no product in the cart <span>😟</span>{' '}
              </h3>
            </div>
            <div className="wrapper_button_message_order">
              <Button
                className=" btn_message_order border-radius"
                text="Come on, treat yourself 😋"
                type="submit"
                onClick={() => navigate('/menu')}></Button>
            </div>
          </div>
        ) : (
          <>
            <div className="row_orders">
              {cart.products.map((productData) => (
                <>
                  <ProductsMolecule
                    key={productData.product._id}
                    product={productData.product}
                    productQuantity={productData.quantity}
                  />
                </>
              ))}
            </div>

            <div className="checkout_order box-shadow border-radius">
              <div className="discount">
                <h5>Get a 10% discount if you buy more than 100 €</h5>
              </div>
              <div className="checkout_detail">
                <div className="subtotal">
                  <div className="text_subtotal">Subtotal</div>
                  <div className="nr_subtotal">{cart.total} €</div>
                </div>
                <div className="subtotal">
                  <div className="text_subtotal">Discount</div>
                  <div className="nr_subtotal">{promocode} €</div>
                </div>
                <div className="subtotal total">
                  <div className="text_subtotal">Total</div>
                  <div className="nr_subtotal">{total_promcode}€</div>
                </div>
                <div className="stripe " >
                  <StripeCheckout
                    name="Food Order"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSThGoJCVAh3Kl6shMp4Z-dcm1_Oo4v2ljsYQ&usqp=CAU"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${total_promcode}`}
                    amount={total_promcode * 100}
                    token={onToken}
                    stripeKey={KEY}>
                    <button className="check">Pay with Card</button>
                    </StripeCheckout>
                  <button className="check1" onClick={payCash}>
                    Pay Cash
                  </button>
                
                </div>
              </div>
            </div>
          </>
        )}
        </div>
      </div>
    )
  }

export default Orders
