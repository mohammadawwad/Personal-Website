import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center style={{paddingTop: '120px'}}>
          Hi, Im Mohammad<br />
          Awwad
        </SectionTitle>
        <SectionText>
        A lead programmer on my high schools robotics team, I am passionate about programming, and I’m always wanting to learn new things as well as teach others.
    
        </SectionText>
        <Button onClick={ ()=>  window.open( "https://drive.google.com/file/d/15pyFGR5tXd82ngxNuYrGRQVd6OHLpqsp/view?usp=sharing", "_blank")} target="_blank">Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;