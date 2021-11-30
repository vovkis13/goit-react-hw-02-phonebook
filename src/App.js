import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = (e, nameForContacts, numberForContacts) => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        {
          id: nanoid(),
          name: nameForContacts,
          number: numberForContacts,
        },
        ...prevState.contacts,
      ],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  deleteItemFromContacts = (e, deletedId) => {
    e.preventDefault();
    this.setState(prevState => {
      const tempArr = prevState.contacts.filter(
        contact => contact.id !== deletedId,
      );
      return { contacts: [...tempArr] };
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitHandler={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} />
        <ContactList
          filteredContacts={this.getFilteredContacts()}
          deleteContact={this.deleteItemFromContacts}
        />
      </div>
    );
  }
}
