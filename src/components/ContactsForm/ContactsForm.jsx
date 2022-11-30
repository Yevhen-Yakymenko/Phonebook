import { useState } from 'react';
import {
  // useGetContactsQuery,
  useAddNewContactMutation,
} from 'redux/contacts/contactsApi';

import {
  StyledForm,
  FormGroup,
  FormControl,
  StyledLable,
  StyledInput,
  IconBox,
  IconClose,
  StyledInputSbm,
} from './ContactsForm.styled';

export default function ContactForm({ closeModal }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');

  // const { data: contacts } = useGetContactsQuery();
  const [addNewContact, { isLoading, isSuccess }] = useAddNewContactMutation();

  // if (name !== '') {
  //   const contactName = name.split(' ');
  //   firstName = contactName[0];
  //   lastName = contactName[1];
  // }

  // const addContact = async (name, number) => {
  //   if (checkContactName(name)) {
  //     return alert(`${name} is already in contacts`);
  //   }

  //   if (checkContactNumber(number)) {
  //     return alert(`${number} is already in contacts`);
  //   }

  //   try {
  //     await addNewContact({ name, number });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const checkContactName = contactName =>
  //   contacts.find(
  //     contact => contact.name.toLowerCase() === contactName.toLowerCase()
  //   );

  // const checkContactNumber = number =>
  //   contacts.find(contact => contact.number === number);

  const handleCange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'firstName') {
      setFirstName(value);
    }

    if (name === 'lastName') {
      setLastName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;

    const name = `${firstName} ${lastName}`;
    const number = form.elements.number.value;

    // addContact(name, number);
    addNewContact({ name: name, number: number });

    form.reset();
    closeModal();
  };

  // if (isSuccess) {
  //   closeModal();
  // }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup>
        <StyledLable htmlFor="firstName">First Name</StyledLable>
        <FormControl>
          <StyledInput
            type="text"
            name="firstName"
            id="firstName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={firstName}
            onChange={handleCange}
          />
          {firstName.length > 0 && (
            <IconBox onClick={() => setFirstName('')}>
              <IconClose />
            </IconBox>
          )}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <StyledLable htmlFor="lastName">Last Name</StyledLable>
        <FormControl>
          <StyledInput
            type="text"
            name="lastName"
            id="lastName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={lastName}
            onChange={handleCange}
          />
          {lastName.length > 0 && (
            <IconBox onClick={() => setLastName('')}>
              <IconClose />
            </IconBox>
          )}
        </FormControl>
      </FormGroup>
      <FormGroup>
        <StyledLable htmlFor="number">Number</StyledLable>
        <FormControl>
          <StyledInput
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleCange}
          />
          {number.length > 0 && (
            <IconBox onClick={() => setNumber('')}>
              <IconClose />
            </IconBox>
          )}
        </FormControl>
      </FormGroup>
      <StyledInputSbm type="submit" value="Add contact" disabled={isLoading} />
    </StyledForm>
  );
}
