import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      setContacts([...parsedContacts]);
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (name, number) => {
    if (checkContactName(name)) {
      return alert(`${name} is already in contacts`);
    }

    if (checkContactNumber(number)) {
      return alert(`${number} is already in contacts`);
    }

    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const checkContactName = contactName =>
    contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

  const checkContactNumber = number =>
    contacts.find(contact => contact.number === number);

  const removeContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const handlFilter = filter => setFilter(filter);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter onFilter={handlFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={removeContact}
      />
    </div>
  );
}
