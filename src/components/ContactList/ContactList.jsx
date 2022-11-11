import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useGetContactsQuery } from 'redux/apiContactsSlice';

export default function ContactList() {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);
  // const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    if (isSuccess) {
      return filter === ''
        ? contacts
        : contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          );
    }
  }, [contacts, filter, isSuccess]);

  // const removeContact = contactId => dispatch(deleteContact(contactId));

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}</span>: <span>{number}</span>{' '}
              <button type="button" onClick={() => {}}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any contacts yet. Try adding a new contact.</p>
      )}
    </>
  );
}
