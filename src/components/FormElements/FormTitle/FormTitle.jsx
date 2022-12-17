import { ContentBox, StyledTitle } from './FormTitle.styled';

export const FormTitle = ({ titleIcon, children }) => {
  return (
    <ContentBox>
      {titleIcon}
      <StyledTitle>{children}</StyledTitle>
    </ContentBox>
  );
};
