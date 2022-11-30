import styled from 'styled-components';
import { IoCloseCircleSharp, IoEye } from 'react-icons/io5';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[3]}px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  z-index: 100;
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormControl = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  border: 2px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  transition: border 100ms linear;

  :hover,
  :focus-within {
    border: 2px solid ${p => p.theme.colors.btnAccent};
  }
`;

export const StyledLable = styled.label`
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.secondary};
  border-radius: ${p => p.theme.space[2]}px;
  border: 1px solid transparent;
  outline: none;
`;

export const IconBox = styled.span`
  position: absolute;
  top: ${p => p.theme.space[2]}px;
  right: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.logo};
  cursor: pointer;
`;

export const IconClose = styled(IoCloseCircleSharp)`
  vertical-align: middle;
  width: ${p => p.theme.fontSizes[5]}px;
  height: ${p => p.theme.fontSizes[5]}px;
`;

export const IconEye = styled(IoEye)`
  vertical-align: middle;
  width: ${p => p.theme.fontSizes[5]}px;
  height: ${p => p.theme.fontSizes[5]}px;
`;

export const BtnSbm = styled.button`
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.btnText};
  background: ${p => p.theme.colors.btnBackground};
  border-radius: ${p => p.theme.space[2]}px;
  border: 1px solid ${p => p.theme.colors.border};
  cursor: pointer;
  transition: color 100ms linear, background 100ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.btnAccent};
  }
`;
