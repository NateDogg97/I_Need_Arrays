import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Button } from 'antd';
import './style.css';

  const items = [
    {
      label: <Link to='/login'>
               Login
             </Link>,
      key: 'login',
      type: 'loggedOut'
    },
    {
      label: <Link to="/signup">
               Signup
             </Link>,
      key: 'signup',
      type: 'loggedOut'
    },
    {
      label: <Link to="/profile">
              Profile
              </Link>,
      key: 'my-profile',
      type: 'loggedIn'
    },
    {
      label: <Button type="link">Logout</Button>,
      key: 'logout-btn',
      type:'loggedIn'
    }
  ];

const Nav = () => {
  const [current, setCurrent] = useState();
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu mode="horizontal" onClick={onClick} items={items} current={[current]}/>
}

export default Nav;