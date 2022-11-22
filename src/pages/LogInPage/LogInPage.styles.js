import styled from 'styled-components';

export const LogInSection = styled.section`
  width: 100vw;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  background: linear-gradient(270deg, #eaf0ff 0%, #f6f9ff 100%);
`;

export const ContentBox = styled.div`
  flex: 1 1 100%;
  padding-right: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 400px;
  padding-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContentMainText = styled.p`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 2;
  text-transform: uppercase;
  color: #3d4f9f;
`;

export const ContentText = styled.p`
  font-family: ${p => p.theme.fonts.secondary};
  line-height: 2;
  color: #8d96bd;
`;

export const FormBox = styled.div`
  flex: 1 1 100%;
  padding-left: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
