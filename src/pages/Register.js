import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Error from '../components/error/Error';
import endpoints from '../config/endpoints';
import AuthManager from '../services/api/auth/request';

const INITIAL_USER_INPUT = {
  name: '',
  username: '',
  password: '',
  confirm_password: '',
};

function Register() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const nameHandle = (ev) => {
    setUserInput({
      ...userInput,
      name: ev.target.value,
    });
  };

  const usernameHandle = (ev) => {
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
  const confirmPasswordHandle = (ev) => {
    setUserInput({
      ...userInput,
      confirm_password: ev.target.value,
    });
  };

  const register = async (ev) => {
    ev.preventDefault();
    try {
      const response = await AuthManager.register(userInput);
      if (response.data) {
        navigate(endpoints.LOGIN);
      }
    } catch (error) {
      console.error(error.response.data);
      if (error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <div className="auth">
      <div className="auth__content">
        <h1 className="auth__title">Sign up</h1>
        {errors?.length ? <Error error={errors} /> : null}
        <form className="form">
          <p className="form__item">
            <label className="form__item__label">Name</label>
            <input
              onChange={nameHandle}
              className="input-field"
              placeholder="Enter your Name"
            />
          </p>
          <p className="form__item">
            <label className="form__item__label">Username</label>
            <input
              onChange={usernameHandle}
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
          <p className="form__item">
            <label className="form__item__label">Confirm Password</label>
            <input
              type="password"
              onChange={confirmPasswordHandle}
              className="input-field"
              placeholder="Enter your password again"
            />
          </p>
          <button onClick={register} className="btn--primary">
            Register
          </button>
        </form>
        <p className="auth__extra">
          Already have an account?
          <Link to={endpoints.LOGIN}>Login Now</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
