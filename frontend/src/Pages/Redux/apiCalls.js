import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from './userRedux';
import { publicRequest, userRequest } from '../../requestMethods';
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
} from './productRedux';
import {
  addOrderFailure,
  addOrderStart,
  addOrderSuccess,
  getOrderFailure,
  getOrderStart,
  getOrderSuccess,
} from './orderRedux';
import { deleteProducts } from './cartRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());

  try {
    const res = await userRequest.get('/users');
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());

  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());

  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(res));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());

  try {
    const res = await publicRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const updateUserFront = async (id, user, dispatch) => {
  dispatch(updateUserStart());

  try {
    const res = await publicRequest.put(`/users/update/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

// ORDERS

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());

  try {
    const res = await publicRequest.get('/orders');
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const addOrder = async (order, dispatch) => {
  dispatch(addOrderStart());
  try {
    const res = await publicRequest.post(`/orders`, order);
    dispatch(addOrderSuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};

export const deleteProducts_user = async (dispatch) => {
  dispatch(deleteProducts());
};
