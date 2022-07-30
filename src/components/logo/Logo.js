import AppConfig from '../../config/app';
import LogoBrand from './../../images/logo.svg';
import './Logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <div>
        <img src={LogoBrand} alt="Logo" width={30} />
      </div>
      <span className="logo__appname">{AppConfig.appName}</span>
    </div>
  );
}
