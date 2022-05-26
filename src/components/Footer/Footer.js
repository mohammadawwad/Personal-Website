import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiReplit } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

let showEasterEgg = false;

const Popup = () => {
    {/*prompt for an input and if it is correct output the image*/}

    
    return(
        <img  src="/images/headshot.png"/> 
    )
}


const Footer = () => {
  return (
    <FooterWrapper>

      {/*Email Section*/}
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem style={{width: '300px'}} target="_blank" href="mailto:mohd-awwad@hotmail.com">
            mohd-awwad@hotmail.com
          </LinkItem>

          {/* <LinkItem > */}
            {/*Change lock to an actual lock logo*/}
            {/* Lock */}
            
            {/* {showEasterEgg ? <Popup/> : <Popup/>} */}

          {/* </LinkItem>  */}
        </LinkColumn>

      </LinkList>

      {/*Social links and buttons Section*/}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/mohammadawwad">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons target="_blank" href="https://replit.com/@awwad">
            <SiReplit size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/mohammad--awwad/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
