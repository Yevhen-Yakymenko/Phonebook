import styled from 'styled-components';
import { IoCloseCircleSharp } from 'react-icons/io5';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[4]}px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
`;

export const FormGroup = styled.div``;

export const FormControl = styled.div`
  position: relative;
  display: flex;
`;

export const StyledLable = styled.label`
  display: block;
  padding-bottom: ${p => p.theme.space[2]}px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[3]}px;

  font-family: ${p => p.theme.fonts.secondary};
  line-height: ${p => p.theme.lineHeights.inputs};

  border: 2px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  outline: none;

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
  width: ${p => p.theme.fontSizes[5]}px;
  height: ${p => p.theme.fontSizes[5]}px;
  vertical-align: middle;
`;

export const BtnSbm = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;

  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.inputs};
  color: ${p => p.theme.colors.btnText};

  background-color: ${p => p.theme.colors.btnBackground};
  border: none;
  border-radius: ${p => p.theme.space[2]}px;

  cursor: pointer;

  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;
