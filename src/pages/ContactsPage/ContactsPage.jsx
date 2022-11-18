import { useState } from 'react';

import Modal from 'components/Modal';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => setShowModal(!showModal);

  return (
    <section>
      {showModal && <Modal onClose={togleModal} />}
      <h2>Contacts</h2>
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
    </section>
  );
};

export default ContactsPage;
