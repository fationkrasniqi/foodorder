import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../Components/atoms/button';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { RiLockFill, RiMailOpenLine } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';

import './Register.scss';
import { addUser } from '../Redux/apiCalls';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    full_name: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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
          const user = { ...formValues, img: downloadURL };
          console.log(user + 'teeeedyrggdfg');
          addUser(user, dispatch);
          navigate('/login');

          //  console.log( { ...inputs, img: downloadURL }) ;
        });
      }
    );
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.full_name) {
      errors.full_name = 'Full name is required!';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    }
    if (!values.address) {
      errors.address = 'Address  is required!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="register_box border-radius box-shadow">
        <h2 className="welcome_text">Register</h2>

        <form className="form">
          <div className="register_form">
            <div className="register_box_inputs">
              <div className="input-container_register">
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  required
                  className="input__field_register"
                  placeholder="Full Name"
                  value={formValues.full_name}
                  onChange={handleChange}
                />
                <i className="register__icon register__icon-left">
                  <FaUser />
                </i>
                <span className="errorMessage">{formErrors.full_name}</span>
              </div>

              <div className="input-container_register">
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="input__field_register"
                  placeholder="Your email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <i className="register__icon register__icon-left">
                  <RiMailOpenLine />
                </i>
                <span className="errorMessage">{formErrors.email}</span>
              </div>
              <div className="input-container_register">
                <input
                  name="username"
                  id="username"
                  type="text"
                  required
                  className="input__field_register"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <i className="register__icon register__icon-left ">
                  <FaUser />
                </i>
                <span className="errorMessage">{formErrors.username}</span>
              </div>
            </div>

            <div className="register_box_inputs">
              <div className="input-container_register">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  className="input__field_register"
                  placeholder="Phone number"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                <i className="register__icon register__icon-right ">
                  <FaPhone />
                </i>
                <span className="errorMessage">{formErrors.phone}</span>
              </div>
              <div className="input-container_register">
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  className="input__field_register"
                  placeholder="Country, City, Str."
                  value={formValues.address}
                  onChange={handleChange}
                />

                <i className="register__icon register__icon-right">
                  <MdLocationPin />
                </i>
                <p className="errorMessage">{formErrors.address}</p>
              </div>
              <div className="input-container_register">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="input__field_register"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <i className="register__icon register__icon-right">
                  <RiLockFill />
                </i>
                <p className="errorMessage">{formErrors.password}</p>
              </div>
            </div>
          </div>

          <div className="upload_image_box">
            <div className="upload_image">
              <label>Upload image</label>
            </div>
            <input
              name="img"
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="button_register">
            <Button
              type="submit"
              text="REGISTER"
              onClick={handleSubmit}
              className="btn btn_register"
            ></Button>
          </div>

          <div className="Singup">
            <h4 className="singup_text">
              Already have an account <Link to={'/login'}>Login here</Link>{' '}
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
