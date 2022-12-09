import { useState } from 'react';

import Modal from 'components/Modal';
import AppBar from 'components/AppBar';
import Filter from 'components/Filter';
import UserMenu from 'components/UserMenu';
import PageTitle from 'components/PageTitle';
import ContactsFormAdd from 'components/ContactsFormAdd';
import ContactsList from 'components/ContactsList';

import { ContactsSection, StyledContainer } from './ContactsPage.styled';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => setShowModal(!showModal);

  return (
    <main>
      <AppBar>
        <button
          type="button"
          onClick={() => {
            togleModal();
          }}
        >
          Add new contact
        </button>
        <Filter />
        <UserMenu />
      </AppBar>
      <ContactsSection>
        {showModal && (
          <Modal onClose={togleModal}>
            <ContactsFormAdd closeModal={togleModal} />
          </Modal>
        )}
        <StyledContainer>
          <PageTitle>Contacts page</PageTitle>
          <ContactsList />
        </StyledContainer>
      </ContactsSection>
    </main>
  );
};

export default ContactsPage;
