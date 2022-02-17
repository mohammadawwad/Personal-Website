import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
// import Pdf from './onlineResume.pdf';



const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My name is Mohammad Awwad I am a lead prorammer on my high schools robotics team, I am pationate about programming, and am always wanting to learn new things as well as teach others. 
        </SectionText>
        <Button onClick={ ()=>  window.open( "https://drive.google.com/file/d/1L70yngQwoWB5AcJwt65d-sIOZevetIBP/view?usp=sharing", "_blank")} target="_blank">Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;