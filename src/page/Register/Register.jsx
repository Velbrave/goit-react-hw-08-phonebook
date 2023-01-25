import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'service/usersServise';
import css from './Register.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};
export const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    signUp(values)
      .then(() => {
        navigate('/login');
      })
      .catch(error => console.log(error.message));
  };
  return (
    <div>
      <h1 className={css.Register}>Register</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </label>

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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
