import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiReplit } from 'react-icons/si';
import { DiCssdeck } from 'react-icons/di';
import CustomizedSwitch from './Switch';

import { OuterDiv, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
    <OuterDiv>
        <Container>
          <Div1>
            <Link href="/">
              <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
                <DiCssdeck size="3rem" /> <span>Home</span>
              </a>
            </Link>
          </Div1>
          <Div2>
            {/* This is the tabs section of the site */}
            <li>
              <Link href="#about">
                <NavLink>About</NavLink>
              </Link>
            </li>    
            <li>
              <Link href="#tech">
                <NavLink>Technologies</NavLink>
              </Link>
            </li>    
            <li>
              <Link href="#projects">
                <NavLink>Projects</NavLink>
              </Link>
            </li>       
          </Div2>
          <Div3>
            <SocialIcons target="_blank" href="https://github.com/mohammadawwad">
              <AiFillGithub size="3rem" />
            </SocialIcons>
        
            <SocialIcons target="_blank" href="https://replit.com/@awwad">
                <SiReplit size="3rem" />
            </SocialIcons>
        
            <SocialIcons target="_blank" href="https://www.linkedin.com/in/mohammad--awwad/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
        
              {/*Toggle button for light/dark mode*/}
              {/*<CustomizedSwitch/>*/}
          </Div3>
        </Container>
    </OuterDiv>

);

export default Header;
