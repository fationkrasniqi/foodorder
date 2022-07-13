import React from 'react';
import Navbar from './Pages/Navbar/navbar';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Final from './Pages/Final/Final';
import Orders from './Pages/Orders/Orders';
import MenuProducts from './Pages/Menu/MenuProducts';
import Pagenotfound from './Pages/Pagenotfound/Pagenotfound';
import Homepage from './Pages/Homepage/Homepage';
import { useSelector } from 'react-redux';
import UserAbout from './Pages/userAbout/userAbout';
import AboutUs from './Pages/About-us/About-us';



const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />{' '}
        <Route path="/menu" element={<MenuProducts />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/*" element={<Pagenotfound />} />
        <Route path="/orders" element={user ? <Orders /> : <Login />} />
        <Route path="/profile" element={user ? <UserAbout /> : <Login />} />
        <Route path="/register" element={user ? <UserAbout /> : <Register />} />
        <Route path="/final" element={user ? <Final /> : <Login />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
