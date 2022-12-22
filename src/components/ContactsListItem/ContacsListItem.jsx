import { useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import Modal from 'components/Modal';
import ContactsFormEdit from 'components/ContactsFormEdit';
import Spinner from 'components/Spinner';

import {
  ContactsItem,
  ContactName,
  ContactNumber,
  ContactCtrl,
  ContactEditBtn,
  ContactDeleteBtn,
} from './ContacsListItem.styled.js';
import { BtnIconBox, BtnText } from 'components/GlobalStyle';

const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const [showModal, setShowModal] = useState(false);

  const togleModal = () => {
    setShowModal(!showModal);
    document.body.classList.toggle('modal-open');
  };

  return (
    <ContactsItem>
      <ContactName>{name}</ContactName>

      <ContactNumber>{number}</ContactNumber>

      <ContactCtrl>
        <ContactEditBtn
          type="button"
          aria-label="edit contact"
          onClick={() => {
            togleModal();
          }}
        >
          <BtnIconBox>
            <MdEdit />
          </BtnIconBox>{' '}
          <BtnText>Edit</BtnText>
        </ContactEditBtn>
        <ContactDeleteBtn
          type="button"
          aria-label="delete contact"
          onClick={() => {
            deleteContact(id);
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner loading={isLoading} />
          ) : (
            <BtnIconBox>
              <MdDeleteForever />
            </BtnIconBox>
          )}{' '}
          <BtnText>Delete</BtnText>
        </ContactDeleteBtn>
      </ContactCtrl>

      {showModal && (
        <Modal onClose={togleModal}>
          <ContactsFormEdit contact={contact} closeModal={togleModal} />
        </Modal>
      )}
    </ContactsItem>
  );
};

export default ContactItem;
