import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__left'>
            <img src="https://via.placeholder.com/150x50" alt="Logo" />
          </div>
          <div className='header__right'>
            <ul className='header__menu'>
              <li>
                <Link className='header__menu__item' to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className='header__menu__item' to="/tasks">Tasks</Link>
              </li>
              <li>
                <Link className='header__menu__item' to="/members">Members</Link>
              </li>
            </ul>
            <div className='header__profile'>
              <div>Hello, <span className='header__profile__name'>John doe</span></div>
              <Link className='header__profile__logout' to="logout">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
