import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoCloseCircleSharp, IoEye } from 'react-icons/io5';

export const StyledForm = styled.form`
  padding: ${p => p.theme.space[3]}px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  box-shadow: 0px 5px 50px ${p => p.theme.colors.border};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormControl = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  transition: border 100ms linear;

  :hover,
  :focus-within {
    border: 1px solid ${p => p.theme.colors.btnAccent};
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

export const StyledInputSbm = styled.input`
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.btnText};
  background: ${p => p.theme.colors.btnBackground};
  border-radius: ${p => p.theme.space[2]}px;
  border: 1px solid ${p => p.theme.colors.border};
  outline: none;
  cursor: pointer;
  transition: color 100ms linear, background 100ms linear;

  &:hover {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.btnAccent};
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
  background: ${p => p.theme.colors.btnAccent};
  border-radius: ${p => p.theme.space[2]}px;
  cursor: pointer;
  transition: opacity 100ms linear, font-weight 100ms linear;

  &:hover {
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
