import styled from 'styled-components';
import { IoCloseCircleSharp } from 'react-icons/io5';

export const FormField = styled.div`
  position: relative;
  display: flex;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[2]}px;

  font-family: ${p => p.theme.fonts.secondary};
  line-height: ${p => p.theme.lineHeights.inputs};

  border: 2px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  outline: none;
  cursor: pointer;

  transition: border 200ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.btnAccent};
  }
`;

export const IconBox = styled.span`
  position: absolute;
  top: 50%;
  right: ${p => p.theme.space[2]}px;
  transform: translateY(-50%);

  color: ${p => p.theme.colors.logo};
  cursor: pointer;
`;

export const IconClose = styled(IoCloseCircleSharp)`
  vertical-align: middle;
  width: ${p => p.theme.fontSizes[5]}px;
  height: ${p => p.theme.fontSizes[5]}px;
`;
