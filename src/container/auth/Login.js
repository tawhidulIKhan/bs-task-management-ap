import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import Error from '../../components/error/Error';
import endpoints from '../../config/endpoints';
import AuthManager from '../../services/api/auth/request';
import { setSession } from '../../store/session/actions';
import './Auth.scss';

function LoginContent(props) {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const nameHandle = (ev) => {
    setUserInput({
      ...userInput,
      username: ev.target.value,
    });
  };

  const passwordHandle = (ev) => {
    setUserInput({
      ...userInput,
      password: ev.target.value,
    });
  };

  const login = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const response = await AuthManager.login(userInput);
      props.setSessionAction(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      if (error.response.data.error) {
        setErrors([error.response.data.error]);
      }
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <div className="auth__content">
        <h1 className="auth__title">Login</h1>
        {errors?.length ? <Error error={errors} /> : null}
        <form className="form">
          <p className="form__item">
            <label className="form__item__label">Username</label>
            <input
              onChange={nameHandle}
              className="input-field"
              placeholder="Enter your username"
            />
          </p>
          <p className="form__item">
            <label className="form__item__label">Password</label>
            <input
              type="password"
              onChange={passwordHandle}
              className="input-field"
              placeholder="Enter your password"
            />
          </p>
          <Button loading={loading} onClick={login} label="Login" />
        </form>
        <p>
          Do not have an account?{' '}
          <Link to={endpoints.REGISTER}>Register Now</Link>
        </p>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  setSessionAction: setSession,
};

export default connect(null, mapDispatchToProps)(LoginContent);
