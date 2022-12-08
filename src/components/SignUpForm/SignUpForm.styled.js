import styled from 'styled-components';
import { IoCloseCircleSharp, IoEye, IoEyeOff } from 'react-icons/io5';

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
  /* display: flex;
  flex-direction: column; */
`;

export const FormField = styled.div`
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

export const IconEye = styled(IoEye)`
  vertical-align: middle;
  width: ${p => p.theme.fontSizes[5]}px;
  height: ${p => p.theme.fontSizes[5]}px;
`;

export const IconEyeOff = styled(IoEyeOff)`
  vertical-align: middle;
  width: ${p => p.theme.fontSizes[5]}px;
  height: ${p => p.theme.fontSizes[5]}px;
`;

export const BtnSbm = styled.button`
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.btnText};
  background-color: ${p => p.theme.colors.btnBackground};
  border-radius: ${p => p.theme.space[2]}px;
  border: 1px solid ${p => p.theme.colors.border};
  cursor: pointer;
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.btnAccent};
  }
`;
