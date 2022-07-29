import React from 'react'
import App from '../../App'
import AppConfig from '../../config/app'
import './Logo.scss';
import LogoBrand from './../../images/logo.svg';

export default function Logo() {
  return (
    <div className='logo'>
        <div>
            <img src={LogoBrand} alt="Logo" width={30} />
        </div>
        <span className='logo__appname'>
            {AppConfig.appName}
        </span>
    </div>
  )
}
