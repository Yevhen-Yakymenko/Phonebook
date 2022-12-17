import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import ContacsListItem from 'components/ContactsListItem';

import { StyledContactsList, StyledText } from './ContactsList.style';

const MessageText = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default function ContactList() {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const isHaveFilterContacts =
    filteredContacts?.length > 0 ? (
      <StyledContactsList>
        {filteredContacts.map(contact => (
          <ContacsListItem key={contact.id} contact={contact} />
        ))}
      </StyledContactsList>
    ) : (
      <MessageText>You don't have any contacts with this name.</MessageText>
    );

  const isHaveContacts =
    contacts?.length > 0 ? (
      isHaveFilterContacts
    ) : (
      <MessageText>
        You don't have any contacts yet. Try adding a new contact.
      </MessageText>
    );

  const isGetContacts = () => {
    if (isSuccess) {
      return isHaveContacts;
    }
    if (isError) {
      return <MessageText>{error.data}</MessageText>;
    }
  };

  return <>{isLoading ? <p>Loading...</p> : isGetContacts()}</>;
}
