import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import NewProduct from './pages/newProduct/NewProduct';
import NewUser from './pages/NewUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/User/User';
import UserList from './pages/UserList/UserList';
import { useSelector } from 'react-redux';
import { user } from './redux/userRedux';
import { useState, useEffect } from 'react';
import Order from './pages/order/Order';
import OrderList from './pages/orderList/OrderList';
import Login from './pages/login/Login';

const App = () => {
  const TOKEN = useSelector(user);

  const [admin, setAdmin] = useState();
  useEffect(() => {
    if (TOKEN) {
      TOKEN.isAdmin ? setAdmin(true) : setAdmin(false);
    }
  });

  return (
    <BrowserRouter>
      {admin ? (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/users" element={<UserList />}></Route>
              <Route path="/user/:userId" element={<User />}></Route>
              <Route path="/newUser" element={<NewUser />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/product/:productId" element={<Product />}></Route>
              <Route path="/newProduct" element={<NewProduct />}></Route>
              <Route path="/orders" element={<OrderList />}></Route>
              <Route path="/orders/:orderID" element={<Order />}></Route>
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
