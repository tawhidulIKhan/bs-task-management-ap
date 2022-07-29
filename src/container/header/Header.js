import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import MenuProfile from '../../components/menuProfile/MenuProfile';
import endpoints from '../../config/endpoints';
import './Header.scss';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__left'>
            <Logo />
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
            <MenuProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

