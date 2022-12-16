import styled from 'styled-components';

export const FieldBox = styled.div`
  position: relative;
  display: flex;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.inputs};

  border: 2px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
  outline: none;

  cursor: pointer;

  transition: border ${p => p.theme.transitions.main};

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.btnAccent};
  }
`;

export const IconBoxBefore = styled.span`
  position: absolute;
  top: 50%;
  left: ${p => p.theme.space[2]}px;
  transform: translateY(-50%);

  display: flex;

  font-size: ${p => p.theme.fontSizes[4]}px;

  pointer-events: none;

  transition: color ${p => p.theme.transitions.main};

  ${StyledInput}:hover ~ &,
  ${StyledInput}:focus ~ & {
    color: ${p => p.theme.colors.textAccent};
  }
`;

export const IconBoxAfter = styled.span`
  padding: ${p => p.theme.space[2]}px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  display: flex;

  font-size: ${p => p.theme.fontSizes[5]}px;
  color: currentColor;
  background: none;
  border: none;

  cursor: pointer;

  transition: color ${p => p.theme.transitions.main};

  ${StyledInput}:hover ~ &,
  ${StyledInput}:focus ~ & {
    color: ${p => p.theme.colors.heading};
  }
`;
