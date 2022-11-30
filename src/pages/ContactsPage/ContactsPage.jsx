import { useState } from 'react';

import Modal from 'components/Modal';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

import { ContactsSection } from './ContactsPage.styled';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => setShowModal(!showModal);

  return (
    <ContactsSection>
      {showModal && <Modal onClose={togleModal} />}
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
      <ContactsList showModal={showModal} togleModal={togleModal} />
    </ContactsSection>
  );
};

export default ContactsPage;
