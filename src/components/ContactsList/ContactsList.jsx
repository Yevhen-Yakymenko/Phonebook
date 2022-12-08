import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import ContacsListItem from 'components/ContactsListItem';

export default function ContactList() {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetContactsQuery();

  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    if (isSuccess) {
      return filter === ''
        ? contacts
        : contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          );
    }
  }, [contacts, filter, isSuccess]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredContacts?.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <ContacsListItem key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>You don't have any contacts yet. Try adding a new contact.</p>
      )}
    </>
  );
}
