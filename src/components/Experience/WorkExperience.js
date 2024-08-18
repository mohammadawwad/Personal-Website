import React from 'react';
import {
  ExperienceCard,
  ExperienceContainer,
  VerticalTimeline,
  Dot,
  HeaderThree,
  CompanyLogo,
  CompanyName,
  DateRange,
  CardInfo,
} from './WorkExperienceStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Experiences } from '../../constants/constants';

const WorkExperience = () => {
  return (
    <Section nopadding id="experience"  style={{paddingTop: '60px'}}>
      <SectionTitle main>Work Experience</SectionTitle>
      <ExperienceContainer>
        <VerticalTimeline />
        {Experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <Dot active={index === 0} />
            <HeaderThree>{exp.title}</HeaderThree>
            <CompanyName>{exp.company}</CompanyName>
            {exp.logo && <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />}
            <DateRange>{exp.dateRange}</DateRange>
            <CardInfo>{exp.description}</CardInfo>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </Section>
  );
};

export default WorkExperience;
