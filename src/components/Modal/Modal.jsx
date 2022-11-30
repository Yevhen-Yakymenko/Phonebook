import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// import { useUpdateContactMutation } from 'redux/contacts/apiContactsSlice';

import ContactForm from 'components/ContactsForm';

import { ModalOverlay, ModalBody, BtnClose, IconClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleClick}>
      <ModalBody>
        <ContactForm closeModal={onClose} />
        <BtnClose
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          <IconClose />
        </BtnClose>
      </ModalBody>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
