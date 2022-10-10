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
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handlFilter = filter => this.setState({ ...filter });

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handlFilter} />
        <ContactList contacts={contacts} filter={filter} />
      </div>
    );
  }
}
