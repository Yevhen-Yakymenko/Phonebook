import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const filteredContacts = findContact(contacts, filter);

  function findContact(contacts, filter) {
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  }

  const removeContact = contactId => dispatch(deleteContact(contactId));

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>: <span>{number}</span>{' '}
            <button type="button" onClick={() => removeContact(id)}>
              Delete
            </button>
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
