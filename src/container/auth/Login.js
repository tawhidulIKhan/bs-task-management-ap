import React, {useState} from 'react'
import { connect } from 'react-redux';
import AuthManager from '../../services/api/auth/request';
import { setSession } from '../../store/session/actions';
import './Auth.scss';

function LoginContent(props) {
  const [userInput, setUserInput] = useState({
    username:'',
    password: ''
  });

  const nameHandle = (ev) => {
    setUserInput({
      ...userInput,
      username: ev.target.value
    });
  }

  const passwordHandle = (ev) => {
    setUserInput({
      ...userInput,
      password: ev.target.value
    });
  }

  const login = async (ev) => {
    ev.preventDefault();
    try {
      const response = await AuthManager.login(userInput);
      props.setSessionAction(response.data);
    } catch (error) {
      console.error(error);  
    }
  }

  return (
      <div className='auth'>
          <div className='auth__content'>
            <h1 className='auth__title'>Login</h1>
            <form>
              <p>
                <label className='auth__label'>Username</label>
                <input onChange={nameHandle} className='auth__input--text input-field' placeholder='Enter your username' />
              </p>
              <p>
                <label className='auth__label'>Password</label>
                <input onChange={passwordHandle} className='auth__input--password input-field'  placeholder='Enter your password' />
              </p>
              <button onClick={login} className='btn--primary'>Login</button>
            </form>
          </div>
      </div>
  )
}

const mapDispatchToProps = {
  setSessionAction: setSession
}

export default connect(null, mapDispatchToProps)(LoginContent);
