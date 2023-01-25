import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'Redux/contacts/contactsThunk';
import { getContact, getError, getFilter } from 'Redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContact);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {error && <p>Error...</p>}
      {Array.isArray(filteredContacts) &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <p className={css.text}>
                <b>Name: </b>
                {name}
              </p>
              <p className={css.text}>
                <b>Phone: </b>
                {number}
              </p>
              <button
                className={css.button}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
export default ContactList;

ContactList.protoTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.number,
  }),
  onDeleteContact: PropTypes.func,
};
