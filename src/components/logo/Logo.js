import { Link } from 'react-router-dom';
import AppConfig from '../../config/app';
import endpoints from '../../config/endpoints';
import LogoBrand from './../../images/logo.svg';
import './Logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <Link to={endpoints.DASHBOARD}>
        <div>
          <img src={LogoBrand} alt="Logo" width={30} />
        </div>
        <span className="logo__appname">{AppConfig.appName}</span>
      </Link>
    </div>
  );
}
