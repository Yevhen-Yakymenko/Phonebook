import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

import Modal from 'components/Modal';
import AppBar from 'components/AppBar';
import LogoIcon from 'components/LogoIcon';
import NavBloc from 'components/NavBloc';
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

const ContactsPage = ({ getHeight }) => {
  const [showModal, setShowModal] = useState(false);

  const togleModal = () => {
    setShowModal(!showModal);
    document.body.classList.toggle('modal-open');
  };

  return (
    <>
      <AppBar getHeight={getHeight}>
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
            <span className="btn-main__icon-box">
              <AiOutlineUserAdd />
            </span>
            <span className="btn-main__text">Add new contact</span>
          </BtnAdd>

          <Filter />
        </ContactsCtrl>

        <NavBloc>
          <UserMenu />
        </NavBloc>
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
