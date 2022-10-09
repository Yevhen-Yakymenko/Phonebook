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

  handlFilter = obj => {
    this.setState({ ...obj });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <ContactForm addContact={this.addNewContact} />
        <Filter onFilter={this.handlFilter} />
        <ContactList contacts={contacts} filter={filter} />
      </>
    );
  }
}
