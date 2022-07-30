import React from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../config/endpoints';
import './Menu.scss';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link className="menu__item" to={endpoints.DASHBOARD}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="menu__item" to={endpoints.TASKS}>
          Tasks
        </Link>
      </li>
      <li>
        <Link className="menu__item" to={endpoints.MEMBERS}>
          Members
        </Link>
      </li>
    </ul>
  );
}
