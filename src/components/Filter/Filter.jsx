import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default class Filter extends Component {
  state = {
    filterText: '',
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={this.state.filterText}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan"
          className="input"
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
// Filter.propTypes = {
//   options: PropTypes.object,
//   onLeaveFeedback: PropTypes.func,
// };
