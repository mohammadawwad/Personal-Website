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
  TimelineWrapper,
  TimelineItem,
} from './WorkExperienceStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Experiences } from '../../constants/constants';

const WorkExperience = () => {
  return (
    <Section nopadding id="work-experience">
      <SectionTitle main>Work Experience</SectionTitle>
      <ExperienceContainer>
        <TimelineWrapper>
          <VerticalTimeline />
          {Experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <Dot active={index === 0} />
              <ExperienceCard>
                <HeaderThree>{exp.title}</HeaderThree>
                <CompanyName>{exp.company}</CompanyName>
                {exp.logo && <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />}
                <DateRange>{exp.dateRange}</DateRange>
                <CardInfo>{exp.description}</CardInfo>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </ExperienceContainer>
    </Section>
  );
};

export default WorkExperience;
