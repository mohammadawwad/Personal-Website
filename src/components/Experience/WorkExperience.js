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
    <Section nopadding id="work-experience">
      <SectionTitle main>Work Experience</SectionTitle>
      <ExperienceContainer>
        <VerticalTimeline />
        {Experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <Dot active={index === 0} />
            {exp.logo && <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />}
            <HeaderThree>{exp.title}</HeaderThree>
            <CompanyName>{exp.company}</CompanyName>
            <DateRange>{exp.dateRange}</DateRange>
            <CardInfo>{exp.description}</CardInfo>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </Section>
  );
};

export default WorkExperience;
