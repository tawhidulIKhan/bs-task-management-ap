import React from 'react'
import './Auth.scss';

export default function LoginContent() {
  return (
      <div className='auth'>
          <div className='auth__content'>
            <h1 className='auth__title'>Login</h1>
            <form>
              <p>
                <label className='auth__label'>Username</label>
            <input className='auth__input--text input-field' placeholder='Enter your username' />
              </p>
              <p>
            <label className='auth__label'>Password</label>
            <input className='auth__input--password input-field'  placeholder='Enter your password' />
              </p>
              <button className='btn--primary'>Login</button>
            </form>
          </div>
      </div>
  )
}
