import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addItemToContacts = (e, contactName, contactNumber) => {
    e.preventDefault();
    if (!this.state.contacts.find(contact => contact.name === contactName)) {
      this.setState(prevState => ({
        contacts: [
          {
            id: nanoid(),
            name: contactName,
            number: contactNumber,
          },
          ...prevState.contacts,
        ],
      }));
      return;
    }
    window.alert(`${contactName} is already in contacts.`);
  };

  deleteItemFromContacts = e => {
    e.preventDefault();
    this.setState(prevState => {
      const tempArr = prevState.contacts.filter(
        contact => contact.id !== e.target.value,
      );
      return { contacts: [...tempArr] };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  setFilterValue = e => this.setState({ filter: e.target.value });

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addItemToContacts} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChangeFilterValue={this.setFilterValue}
        />
        <ContactList
          filteredContacts={this.filterContacts()}
          deleteContact={this.deleteItemFromContacts}
        />
      </div>
    );
  }
}
