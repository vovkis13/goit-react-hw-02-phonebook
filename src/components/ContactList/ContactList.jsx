import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

export default function ContactList({ filteredContacts, deleteContact }) {
  return (
    <ul className={s.contacts}>
      {filteredContacts.map(filteredContact => (
        <Contact
          contact={filteredContact}
          key={filteredContact.id}
          handleDelete={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
};
