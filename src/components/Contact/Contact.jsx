import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

export default function Contact({ contact, handleDelete }) {
  const { name, number } = contact;
  return (
    <li className={s.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button
        className={s.button}
        type="button"
        onClick={e => handleDelete(e, contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
