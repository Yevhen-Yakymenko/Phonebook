import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectFilter } from 'redux/contacts/contactsSelectors';
import { filterContacts } from 'redux/contacts/contactsFilterSlice';

import { FormField, StyledInput, IconBox, IconClose } from './Filter.styled';

export default function Filter() {
  const curentFilter = useSelector(selectFilter);
  const [filter, setFilter] = useState(curentFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    setFilter(value);

    dispatch(filterContacts(value));
  };

  return (
    <FormField>
      <StyledInput
        type="text"
        name="findContact"
        id="findContact"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Find contact by name"
        title="Find contact by name."
        value={filter}
        onChange={handleChange}
      />
      {filter.length > 0 && (
        <IconBox onClick={() => setFilter('')}>
          <IconClose />
        </IconBox>
      )}
    </FormField>
  );
}
