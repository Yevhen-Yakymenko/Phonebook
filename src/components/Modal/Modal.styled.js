import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(245, 248, 255, 0.4);
`;

export const ModalBody = styled.div`
  position: relative;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  width: ${p => p.theme.fontSizes[7]}px;
  height: ${p => p.theme.fontSizes[7]}px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 8px;
  outline: none;

  cursor: pointer;

  transition: color ${p => p.theme.transitions.main},
    border-color ${p => p.theme.transitions.main},
    scale ${p => p.theme.transitions.main};

  :hover,
  :focus-within {
    color: ${p => p.theme.colors.btnText};
    border-color: ${p => p.theme.colors.btnAccent};
    scale: 1.05;
  }
`;

export const IconClose = styled(IoCloseOutline)`
  width: ${p => p.theme.fontSizes[6]}px;
  height: ${p => p.theme.fontSizes[6]}px;
  vertical-align: middle;
`;
