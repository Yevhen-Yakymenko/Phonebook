import { useState, useEffect } from 'react';
import {
  // useGetContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contactsApi';

import { FaUserEdit } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';
import { IoCloseCircleSharp, IoCallSharp } from 'react-icons/io5';

import {
  FormContainer,
  FormTitle,
  FormLabel,
  FormField,
  FormBtnSbm,
} from 'components/FormElements';

export default function ContactForm({ contact, closeModal }) {
  const { name, number } = contact;
  const currentName = name.split(' ');
  const [firstName, setFirstName] = useState(currentName[0]);
  const [lastName, setLastName] = useState(currentName[1]);
  const [curentNnumber, setCurentNnumber] = useState(number);

  // const { data: contacts } = useGetContactsQuery();
  const [updateContact, { isLoading, isSuccess }] = useUpdateContactMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [closeModal, isSuccess]);

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
    updateContact({ id: contact.id, name: name, number: number });

    form.reset();
  };

  return (
    <FormContainer autoComplete="off" onSubmit={handleSubmit}>
      <FormTitle titleIcon={<FaUserEdit />}>Edit contact</FormTitle>
      <div>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
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
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
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
        <FormLabel htmlFor="number">Number</FormLabel>
        <FormField
          state={curentNnumber}
          setState={setCurentNnumber}
          func={() => setCurentNnumber('')}
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
      <FormBtnSbm loading={isLoading} disabled={isLoading} type="submit">
        Save changes
      </FormBtnSbm>
    </FormContainer>
  );
}
