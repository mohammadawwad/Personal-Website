import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCode, DiGitBranch, DiStackoverflow } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle style={{paddingTop: '50px'}}>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the hardware and software world.
      From Front-End and Back-End To Robotics and Electronics
    </SectionText>
    <List>
      
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js <br />
            JavaScript, HTML, CSS 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            Express.js <br />
            Flask <br />
            Databases such as MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Overall</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, Python <br />
            C, C++, C# <br />
            Intro to AI <br />
            Cybersecurity Foundations
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
      <ListItem>
        <picture>
          <DiGitBranch size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git <br />
            Github
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
      <ListItem>
        <picture>
          <DiStackoverflow size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Visual Studio Code <br />
            Windows <br />
            Replit <br />
            Low Code - No Code Platforms
          </ListParagraph>
        </ListContainer>
      </ListItem>

    
      
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Canva <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
