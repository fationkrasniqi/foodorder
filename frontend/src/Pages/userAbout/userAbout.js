import React, { useState } from 'react';
import { MdCalendarToday } from 'react-icons/md';
import { MdOutlineLocationSearching } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import { MdOutlinePermIdentity } from 'react-icons/md';
import { MdPhoneAndroid } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import './userAbout.scss';
import { deleteProducts_user, logout, updateUser, updateUserFront } from '../Redux/apiCalls';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';


export default function UserAbout() {
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);
  const userId = user._id;

  const created = new Date(user.createdAt);
  const year = created.getFullYear();
  const month = created.getMonth() + 1;
  const day = created.getDate();

  const updated = new Date(user.updatedAt);
  const uYear = updated.getFullYear();
  const uMonth = updated.getMonth() + 1;
  const uDay = updated.getDate();

  const updatedAt = uDay + '-' + uMonth + '-' + uYear;
  const createdAt = day + '-' + month + '-' + year;

  const handleClick = (e) => {
    e.preventDefault();
    deleteProducts_user(dispatch)
    logout(dispatch);
    navigate('/');
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = (e) => {
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
          const user = { ...inputs, img: downloadURL };
          const id = userId;
          console.log(id);

          updateUserFront(id, user, dispatch);
        });
        logout(dispatch);
        navigate('/login');
      }
    );
  };

  console.log(user._id);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Update your profile</h1>
      </div>

      <div className="userContainer">
        <div className="userShow box-shadow">
          <div className="userShowTop ">
            <div className="userShowTop_left">
              <img
                src={
                  user.img ||
                  'https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-300x300.jpeg'
                }
                className="userImg"
                alt="user"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{user.username}</span>
                <span className="userShowUserTitle">{user.isAdmin}</span>
              </div>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MdOutlinePermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                <p>{user.full_name}</p>
              </span>
            </div>

            <div className="userShowInfo">
              <MdCalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                <p>Joined: {createdAt}</p>
              </span>
            </div>
            <div className="userShowInfo">
              <BsPencilSquare className="userShowIcon" />
              <span className="userShowInfoTitle">
                <p>Last update: {updatedAt} </p>
              </span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MdPhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">
                <p>{user.phone || '+383 383 383'}</p>
              </span>
            </div>

            <div className="userShowInfo">
              <MdMailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">
                <p>{user.email}</p>
              </span>
            </div>

            <div className="userShowInfo">
              <MdOutlineLocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">
                <p>{user.address || 'no address provided'}</p>
              </span>
            </div>
          </div>
        </div>

        <div className="userUpdate box-shadow">
          <h1 className="userUpdateTitle">Edit</h1>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  className="userUpdateInput"
                  placeholder={user.username}
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  name="password"
                  className="userUpdateInput"
                  placeholder="******"
                  type="password"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  name="full_name"
                  className="userUpdateInput"
                  placeholder={user.full_name}
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  name="email"
                  className="userUpdateInput"
                  placeholder={user.email}
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  name="phone"
                  className="userUpdateInput"
                  placeholder={user.phone || '+383 383 383'}
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  name="address"
                  className="userUpdateInput"
                  placeholder={user.address || 'no address provided'}
                  type="text"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={
                    user.img ||
                    'https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-300x300.jpeg'
                  }
                />

                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              <button className="userUpdateButton" onClick={handleUpdate}>
                Update
              </button>
              <p className="update_info">* all fields are required!</p>
              <p className="update_info">
                * you will be logged out after the update
              </p>
            </div>
          </form>
          <div className="logout_admin">
            <button className="button_logout" onClick={handleClick}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
