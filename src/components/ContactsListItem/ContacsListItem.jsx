import { useState } from 'react';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import Modal from 'components/Modal';
import ContactsFormEdit from 'components/ContactsFormEdit';

import {
  ContactsItem,
  ContactName,
  ContactNumber,
  ContactEditBtn,
  ContactDeleteBtn,
} from './ContacsListItem.styled.js';

const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const [showModal, setShowModal] = useState(false);

  const togleModal = () => setShowModal(!showModal);

  return (
    <ContactsItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <ContactEditBtn
        type="button"
        onClick={() => {
          togleModal();
        }}
      >
        Edit
      </ContactEditBtn>
      <ContactDeleteBtn
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        disabled={isLoading}
      >
        Delete
      </ContactDeleteBtn>
      {showModal && (
        <Modal onClose={togleModal}>
          <ContactsFormEdit contact={contact} closeModal={togleModal} />
        </Modal>
      )}
    </ContactsItem>
  );
};

export default ContactItem;
