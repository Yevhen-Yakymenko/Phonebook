import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoCloseCircleSharp, IoEye, IoEyeOff } from 'react-icons/io5';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[3]}px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  box-shadow: 0px 5px 50px ${p => p.theme.colors.border};
`;

export const FormGroup = styled.div``;

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
  padding-left: ${p => p.theme.space[2]}px;

  font-family: ${p => p.theme.fonts.secondary};
  line-height: ${p => p.theme.lineHeights.inputs};

  border: 2px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  outline: none;

  cursor: pointer;

  transition: border 200ms linear;

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

export const DecorBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
`;

export const DecorBoxLine = styled.div`
  flex: 1 1 auto;
  height: 1px;
  background-color: ${p => p.theme.colors.border};
`;

export const DecorBoxText = styled.p`
  color: #adb3cb;
`;

export const StyledLink = styled(NavLink)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.btnAccent};
  border-radius: ${p => p.theme.space[2]}px;
  cursor: pointer;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    font-weight: ${p => p.theme.fontWeights.bold};
    opacity: 0.8;
  }

  &::after {
    display: block;
    content: attr(title);
    font-weight: ${p => p.theme.fontWeights.bold};
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;
