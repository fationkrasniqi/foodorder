import React from 'react';
import './product.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { updateProduct } from '../../redux/apiCalls';


export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // const fileName = new Date().getTime() + file.name;
    // const storage = getStorage(app);
    // const storageRef = ref(storage, fileName);

    // const uploadTask = uploadBytesResumable(storageRef, file);

    // // Register three observers:
    // // 1. 'state_changed' observer, called any time the state changes
    // // 2. Error observer, called on failure
    // // 3. Completion observer, called on successful completion
    // uploadTask.on(
    //   'state_changed',
    //   (snapshot) => {
    //     // Observe state change events such as progress, pause, and resume
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');
    //     switch (snapshot.state) {
    //       case 'paused':
    //         console.log('Upload is paused');
    //         break;
    //       case 'running':
    //         console.log('Upload is running');
    //         break;
    //       default:
    //     }
    //   },
    //   (error) => {
    //     // Handle unsuccessful uploads
    //   },
    //   () => {
    //     // Handle successful uploads on complete
    //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       const product = { ...inputs, img: downloadURL };
    //       const id = productId
    //       updateProduct(id,product, dispatch);
    //     });
    //   }
    // );

    const product = { ...inputs };
    const id = productId;
    updateProduct(id, product, dispatch);
  
  };
 
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">{product.price} €</span>
            </div>
           
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              name="name"
              type="text"
              placeholder={product.name}
              onChange={handleChange}
            />
            <label>Product Price</label>
            <input
              name="price"
              type="text"
              placeholder={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
