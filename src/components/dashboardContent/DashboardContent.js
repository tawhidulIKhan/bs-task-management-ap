import React from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../config/endpoints';
import './DashboardContent.scss';

export default function DashboardContent() {
  return (
    <div className="dashboard__page">
      <div className="container">
        <div className="">
          <div className="dashboard__page__content__wrapper">
            <button className="dashboard__page__tilebtn">
              <Link to={endpoints.TASKS}>Tasks</Link>
            </button>
            <button className="dashboard__page__tilebtn">
              <Link to={endpoints.TASKS}>Members</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
