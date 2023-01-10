import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

import {
  MainFooter,
  SectionContainer,
  CopyrightText,
  SocialLinksList,
  SocialLink,
} from './Footer.styled';

const Footer = () => {
  return (
    <MainFooter>
      <SectionContainer>
        <CopyrightText>
          {'\u00A9'} 2023 | Developed by{' '}
          <a
            href="https://yevhen-yakymenko.github.io/my-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yevhen Y.
          </a>
        </CopyrightText>
        <SocialLinksList>
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/yevhen-yakymenko-fed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-label="LinkedIn link">
                <IoLogoLinkedin />
              </span>
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://github.com/yevhen-yakymenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-label="GitHub link">
                <IoLogoGithub />
              </span>
            </SocialLink>
          </li>
        </SocialLinksList>
      </SectionContainer>
    </MainFooter>
  );
};

export default Footer;
