import React from 'react';
import {
  ExperienceCard,
  ExperienceContainer,
  Timeline,
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
        <Timeline>
          {Experiences.map((exp, index) => (
            <ExperienceCard key={index}>
              {exp.logo && <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />}
              <HeaderThree>{exp.title}</HeaderThree>
              <CompanyName>{exp.company}</CompanyName>
              <DateRange>{exp.dateRange}</DateRange>
              <CardInfo>{exp.description}</CardInfo>
            </ExperienceCard>
          ))}
        </Timeline>
      </ExperienceContainer>
    </Section>
  );
};

export default WorkExperience;
