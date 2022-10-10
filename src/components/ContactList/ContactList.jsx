import React, { Component } from 'react';

export default class ContactList extends Component {
  findContact = (contacts, filter) => {
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = this.findContact(contacts, filter);

    return (
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}</span>: <span>{number}</span>{' '}
              <button type="button">Delete</button>
            </li>
          ))
        ) : (
          <li>
            <p>You don't have any contacts yet. Try adding a new contact.</p>
          </li>
        )}
      </ul>
    );
  }
}
