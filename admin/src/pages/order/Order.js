import React from 'react';
import './Order.scss';
import Chart from '../../components/Chart/Chart';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { updateOrder, updateProduct } from '../../redux/apiCalls';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';

export default function Order() {
  const location = useLocation();
  const orderId = location.pathname.split('/')[2];
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderId)
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const order = { ...inputs, img: downloadURL };
          updateOrder(id, order, dispatch);
        });
      }
    );
  };

  return (
    <div className="product">
      <div className="productTop">
        <div className="productTopRight">
          <div className="user_data">
            <h3 className="user_data">User Data</h3>
          </div>
          <div className="productInfoTop">
            <img src={order.userImg} alt="" className="productInfoImg" />
            <span className="productName">{order.full_name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="order_users_info">id: </span>
              <Link to={`/user/${order.userId}`}>
                <span className="order_users_value">&nbsp;{order.userId}</span>
              </Link>
            </div>
            <div className="productInfoItem">
              <span className="order_users_info">Total:</span>
              <span className="order_users_value">{order.amount} €</span>
            </div>

            <div className="productInfoItem">
              <span className="order_users_info">Phone</span>
              <span className="order_users_value">{order.phone}</span>
            </div>
            <div className="productInfoItem">
              <span className="order_users_info">Address</span>
              <span className="order_users_value">{order.address}</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="orders_item">Orders</h3>
      <table className="styled-table box-shadow">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Img</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        {order.products.map((item) => (
          <>
            <tbody>
              <tr>
                <td>{item.product._id}</td>
                <td>
                  {' '}
                  <img src={item.product.img} alt="" className="order_img" />
                </td>
                <td>{item.product.name}</td>
                <td>{item.price} €</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price} €</td>
              </tr>
            </tbody>
          </>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td>Subtotal: </td>
          <td></td>
          <td></td>
          <td colSpan={3}>
            <p> {order.total} €</p>
          </td>
        </tr>
        <td></td>
        <td></td>
        <td>
          <p>Discount: </p>
        </td>
        <td></td>
        <td></td>
        <td colSpan={3}>
          <p>- {order.promocode} €</p>
        </td>

        <tr>
          <td></td>
          <td></td>
          <td colSpan={3} className="price">
            TOTAL:{' '}
          </td>
          {/* <td></td>
        <td></td> */}
          <td colSpan={3}>
            <b>{order.amount} €</b>
          </td>
        </tr>
      </table>
    </div>
  );
}
