import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Mohammad <br/>
          Awwad
        </SectionTitle>
        <SectionText>
        Pursuing a Degree in Software Engineering as the Esteemed 2023 Schulich Leader Scholar — Canada's Most Prestigious STEM Scholarship with 300,000+ applicants each year.
        </SectionText>
        <Button onClick={ ()=>  window.open("https://docs.google.com/document/d/1FqB05NQe6KAypxruaeounts0mLenbJK1lL3lqSdthJE/edit?usp=sharing", "_blank")} target="_blank">Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
