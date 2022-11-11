import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

import './App.css';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
