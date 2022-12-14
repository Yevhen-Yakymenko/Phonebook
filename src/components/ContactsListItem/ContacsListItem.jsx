import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import Modal from 'components/Modal';
import ContactsFormEdit from 'components/ContactsFormEdit';

import {
  ContactsItem,
  ContactName,
  ContactNumber,
  ContactCtrl,
  ContactEditBtn,
  ContactDeleteBtn,
  BtnIconBox,
  BtnText,
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

      <ContactCtrl>
        <ContactEditBtn
          type="button"
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
          onClick={() => {
            deleteContact(id);
          }}
          disabled={isLoading}
        >
          <BtnIconBox>
            <MdDeleteForever />
          </BtnIconBox>{' '}
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
