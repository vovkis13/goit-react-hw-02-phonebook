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
    this.props.onChangeFilterValue(value);
  };

  render() {
    return (
      <div className={s.filter}>
        <p className={s.title}>Find contacts by name</p>

        <label>
          <input
            className={s.input}
            type="text"
            name="filterValue"
            value={this.state.filterValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan"
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  onChangeFilterValue: PropTypes.func.isRequired,
};
