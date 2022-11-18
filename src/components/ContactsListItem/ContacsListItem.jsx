import {
  useGetContactQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsApi';

import Modal from 'components/Modal';

const ContactItem = ({ contact, showModal, togleModal }) => {
  const { name, number, id } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li>
      <span>{name}</span>: <span>{number}</span>
      <button
        type="button"
        onClick={() => {
          togleModal();
        }}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        disabled={isLoading}
      >
        Delete
      </button>
      {showModal && (
        <Modal
          name={name}
          number={number}
          btnText={'Edit contact'}
          onClose={togleModal}
        />
      )}
    </li>
  );
};

export default ContactItem;
