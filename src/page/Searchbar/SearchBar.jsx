import ContactForm from 'components/ContactForm/ContactForm ';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutThunk } from 'Redux/auth/auth.thunk';
import { authDataEmail } from 'Redux/selectors';
import css from '../Searchbar/Searchbar.module.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authDataEmail);
  const logout = () => {
    dispatch(LogoutThunk());
  };
  return (
    <div>
      <div className={css.item}>
        <p className={css.text}>
          <b>Email: </b>
          {userEmail}
        </p>
        <button type="button" onClick={logout} className={css.btn}>
          Log out
        </button>
      </div>
      <h1 className={css.Phonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.Contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default SearchBar;
