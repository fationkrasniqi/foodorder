import React from 'react';
import './OrderList.scss';
import { convertGridRowsPropToState, DataGrid } from '@material-ui/data-grid';
import { MdDeleteOutline, MdOutlineVisibility } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrders } from '../../redux/apiCalls';

export default function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);


  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'order',
      headerName: 'Order',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.userImg} alt="" />
            {params.row.full_name}
          </div>
        );
      },
    },
    {
      field: 'Products',
      headerName: 'Products',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.products.length}
            {/* {params.row.products.map((item) => (
           
              <p>{item} </p>
            
          
          ))} */}
          </div>
        );
      },
    },

    {
      field: 'amount',
      headerName: 'Total €',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/orders/' + params.row._id}>
              <button className="widgetSmButton">
                <MdOutlineVisibility className="widgetSmIcon" />
                View
              </button>
            </Link>
            <FaTrash
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="productList">
        <DataGrid
          rows={orders}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={16}
          checkboxSelection
        />
      </div>
    </>
  );
}
