import { useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import Modal from 'components/Modal';
import ContactsFormEdit from 'components/ContactsFormEdit';
import Spinner from 'components/Spinner';

import {
  ContactsItem,
  ContactInfo,
  ContactName,
  ContactNumber,
  ContactCtrl,
  ContactEditBtn,
  ContactDeleteBtn,
} from './ContacsListItem.styled.js';

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
      <ContactInfo>
        <ContactName>{name}</ContactName>

        <ContactNumber>{number}</ContactNumber>
      </ContactInfo>

      <ContactCtrl>
        <ContactEditBtn
          type="button"
          aria-label="edit contact"
          onClick={() => {
            togleModal();
          }}
        >
          <span className="btn-main__icon-box">
            <MdEdit />
          </span>{' '}
          <span className="btn-main__text">Edit</span>
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
            <span className="btn-main__icon-box">
              <MdDeleteForever />
            </span>
          )}{' '}
          <span className="btn-main__text">Delete</span>
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
