import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import endpoints from '../../config/endpoints';
import { getSessionUser, resetSession } from '../../store/session/actions';
import './Header.scss';

function Header(props) {
  const { user, resetSessionAction } = props;
  const logout = () => {
    resetSessionAction();
  }
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
                <Link className='header__menu__item' to={endpoints.DASHBOARD}>Dashboard</Link>
              </li>
              <li>
                <Link className='header__menu__item' to={endpoints.TASKS}>Tasks</Link>
              </li>
              <li>
                <Link className='header__menu__item' to={endpoints.MEMBERS}>Members</Link>
              </li>
            </ul>
            <div className='header__profile'>
              <div>Hello, <span className='header__profile__name'>{user.username}</span></div>
              <button onClick={logout} className='header__profile__logout' to="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: getSessionUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  resetSessionAction: () => dispatch(resetSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
