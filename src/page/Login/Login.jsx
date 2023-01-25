import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginThunk } from 'Redux/auth/auth.thunk';
import css from './Login.module.css';

const initialState = {
  email: '',
  password: '',
};
export const Login = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(LoginThunk(values));
  };
  return (
    <div>
      <h1 className={css.Login}>Login</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password
          <input
            className={css.input}
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
