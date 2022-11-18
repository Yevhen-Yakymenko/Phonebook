import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsFilterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    console.log(value);

    dispatch(filterContacts(value));
  };

  return (
    <label>
      Find contact by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contact by name."
        required
        onChange={handleChange}
      />
    </label>
  );
}
