import { useState } from 'react';
import {
  // useGetContactsQuery,
  useAddNewContactMutation,
} from 'redux/contacts/contactsApi';

import { IoIosPerson } from 'react-icons/io';
import {
  IoCloseCircleSharp,
  IoCallSharp,
  IoPersonAddSharp,
} from 'react-icons/io5';

import {
  FormContainer,
  FormTitle,
  FormLable,
  FormField,
  FormBtnSbm,
} from 'components/FormElements';

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
    <FormContainer autoComplete="off" onSubmit={handleSubmit}>
      <FormTitle titleIcon={<IoPersonAddSharp />}>Create new contact</FormTitle>
      <div>
        <FormLable htmlFor="firstName">First Name</FormLable>
        <FormField
          state={firstName}
          setState={setFirstName}
          func={() => setFirstName('')}
          iconBefore={<IoIosPerson />}
          iconAfter={<IoCloseCircleSharp />}
          type="text"
          name="firstName"
          id="firstName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter contact first name"
          required
        />
      </div>
      <div>
        <FormLable htmlFor="lastName">Last Name</FormLable>
        <FormField
          state={lastName}
          setState={setLastName}
          func={() => setLastName('')}
          iconBefore={<IoIosPerson />}
          iconAfter={<IoCloseCircleSharp />}
          type="text"
          name="lastName"
          id="lastName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter contact last name"
          required
        />
      </div>
      <div>
        <FormLable htmlFor="number">Number</FormLable>
        <FormField
          state={number}
          setState={setNumber}
          func={() => setNumber('')}
          iconBefore={<IoCallSharp />}
          iconAfter={<IoCloseCircleSharp />}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter contact phone number"
          required
        />
      </div>
      <FormBtnSbm type="submit" disabled={isLoading}>
        Save contact
      </FormBtnSbm>
    </FormContainer>
  );
}
