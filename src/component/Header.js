import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <NavLink exact to="/" className="item" activeClassName="item-active">Home</NavLink>
      <NavLink to="/about/leona" className="item" activeClassName="item-active">About</NavLink>
      <NavLink to="/posts" className="item" activeClassName="item-active">Posts</NavLink>
      <NavLink to="/login" className="item" activeClassName="item-active">Login</NavLink>
      <NavLink to="/myPage" className="item" activeClassName="item-active">MyPage</NavLink>
      <NavLink to="/search" className="item" activeClassName="item-active">Search</NavLink>
    </header>
  );
};

export default Header;