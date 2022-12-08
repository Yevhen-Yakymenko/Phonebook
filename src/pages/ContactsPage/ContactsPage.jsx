import { useState } from 'react';

import Modal from 'components/Modal';
import ContactsFormAdd from 'components/ContactsFormAdd';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

import { ContactsSection, Container } from './ContactsPage.styled';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => setShowModal(!showModal);

  return (
    <ContactsSection>
      {showModal && (
        <Modal onClose={togleModal}>
          <ContactsFormAdd closeModal={togleModal} />
        </Modal>
      )}
      <Container>
        <div>
          <button
            type="button"
            onClick={() => {
              togleModal();
            }}
          >
            Add new contact
          </button>
          <Filter />
        </div>
        <ContactsList />
      </Container>
    </ContactsSection>
  );
};

export default ContactsPage;
