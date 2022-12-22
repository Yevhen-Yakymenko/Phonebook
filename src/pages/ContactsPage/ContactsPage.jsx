import { useState } from 'react';

import Modal from 'components/Modal';
import AppBar from 'components/AppBar';
import LogoIcon from 'components/LogoIcon';
import Filter from 'components/Filter';
import UserMenu from 'components/UserMenu';
import PageTitle from 'components/PageTitle';
import ContactsFormAdd from 'components/ContactsFormAdd';
import ContactsList from 'components/ContactsList';

import {
  ContactsSection,
  StyledContainer,
  StyledLogoLink,
  ContactsCtrl,
  BtnAdd,
} from './ContactsPage.styled';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => {
    setShowModal(!showModal);
    document.body.classList.toggle('modal-open');
  };

  return (
    <>
      <AppBar>
        <StyledLogoLink to={'/contacts'}>
          <LogoIcon />
        </StyledLogoLink>
        <ContactsCtrl>
          <BtnAdd
            type="button"
            onClick={() => {
              togleModal();
            }}
          >
            Add new contact
          </BtnAdd>

          <Filter />
        </ContactsCtrl>
        <UserMenu />
      </AppBar>
      <main>
        <ContactsSection>
          {showModal && (
            <Modal onClose={togleModal}>
              <ContactsFormAdd closeModal={togleModal} />
            </Modal>
          )}
          <StyledContainer>
            <PageTitle>Contacts page</PageTitle>
            <ContactsList />
          </StyledContainer>
        </ContactsSection>
      </main>
      <footer>Foter</footer>
    </>
  );
};

export default ContactsPage;
