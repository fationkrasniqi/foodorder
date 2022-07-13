import React from 'react';
import './widgetSm.scss';
import { Visibility } from '@material-ui/icons';
import { MdOutlineVisibility } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = async () => {
      const res = await userRequest.get('users/?new=true');
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm box-shadow">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                'https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-300x300.jpeg'
              }
              alt="user"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.full_name}</span>
            </div>
            <Link to={'/user/' + user._id}>
              <button className="widgetSmButton">
                <MdOutlineVisibility className="widgetSmIcon" />
                Display
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
