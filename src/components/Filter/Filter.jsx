import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default class Filter extends Component {
  state = {
    filterValue: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.sendFilterValue(value);
  };

  render() {
    return (
      <label>
        <p className={s.title}>Find contacts by name</p>
        <input
          type="text"
          name="filterText"
          value={this.state.filterValue}
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
Filter.propTypes = {
  sendFilterValue: PropTypes.func.isRequired,
};
