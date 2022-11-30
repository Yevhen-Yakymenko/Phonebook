import styled from 'styled-components';
import { IoCloseCircleOutline } from 'react-icons/io5';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 1200;
`;

export const ModalBody = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  top: ${p => p.theme.space[1]}px;
  right: ${p => p.theme.space[1]}px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const IconClose = styled(IoCloseCircleOutline)`
  width: ${p => p.theme.fontSizes[7]}px;
  height: ${p => p.theme.fontSizes[7]}px;
  vertical-align: middle;

  color: ${p => p.theme.colors.text};

  :hover {
    color: ${p => p.theme.colors.btnText};
  }
`;
