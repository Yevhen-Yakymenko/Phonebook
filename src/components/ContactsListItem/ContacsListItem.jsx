import { useDeleteContactMutation } from 'redux/apiContactsSlice';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { name, number, id } = contact;

  return (
    <li>
      <span>{name}</span>: <span>{number}</span>
      <button type="button" onClick={() => {}}>
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
    </li>
  );
};

export default ContactItem;
