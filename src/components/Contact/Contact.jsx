import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;
  return (
    <li className={s.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={s.button} type="button" onClick={e => onDelete(e, id)}>
        Delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
