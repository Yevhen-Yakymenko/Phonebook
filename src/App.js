import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = (name, number) => {
    if (this.checkContactName(name)) {
      return alert(`${name} is already in contacts`);
    }

    if (this.checkContactNumber(number)) {
      return alert(`${number} is already in contacts`);
    }

    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  checkContactName = contactName => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === contactName);
  };

  checkContactNumber = number => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.number === number);
  };

  removeContact = id => {
    const deleteContact = this.state.contacts.findIndex(
      contact => contact.id === id
    );

    this.setState(({ contacts }) => contacts.splice(deleteContact, 1));
  };

  handlFilter = filter => this.setState({ ...filter });

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handlFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}
