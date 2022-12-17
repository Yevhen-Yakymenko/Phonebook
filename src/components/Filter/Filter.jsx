import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IoSearch, IoCloseCircleSharp } from 'react-icons/io5';

import { selectFilter } from 'redux/contacts/contactsSelectors';
import { filterContacts } from 'redux/contacts/contactsFilterSlice';

import { FormField } from 'components/FormElements';

export default function Filter() {
  const curentFilter = useSelector(selectFilter);
  const [filter, setFilter] = useState(curentFilter);
  const dispatch = useDispatch();

  const setState = value => {
    setFilter(value);

    dispatch(filterContacts(value));
  };

  const resetState = () => {
    setFilter('');

    dispatch(filterContacts(''));
  };

  return (
    <FormField
      state={filter}
      setState={setState}
      func={resetState}
      iconBefore={<IoSearch />}
      iconAfter={<IoCloseCircleSharp />}
      type="text"
      name="findContact"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Find contact by name."
      autocomplete="off"
      placeholder="Find contact by name"
    />
  );
}
