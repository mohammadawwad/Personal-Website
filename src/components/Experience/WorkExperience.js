import React, { useState } from 'react';
import { ExperienceCard, ExperienceContainer, Timeline, ArrowButton, CardInfo, HeaderThree, CompanyName, DateRange } from './WorkExperienceStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Experiences } from '../../constants/constants';

const WorkExperience = () => {
  const [current, setCurrent] = useState(0);

  const nextExperience = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % Experiences.length);
  };

  const prevExperience = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + Experiences.length) % Experiences.length);
  };

  return (
    <Section nopadding id="work-experience">
      <SectionTitle main>Work Experience</SectionTitle>
      <ExperienceContainer>
        <ArrowButton onClick={prevExperience}>&lt;</ArrowButton>
        <Timeline>
          {Experiences.map((exp, index) => (
            <ExperienceCard key={index} active={index === current}>
              <HeaderThree>{exp.title}</HeaderThree>
              <CompanyName>{exp.company}</CompanyName>
              <DateRange>{exp.dateRange}</DateRange>
              <CardInfo>{exp.description}</CardInfo>
            </ExperienceCard>
          ))}
        </Timeline>
        <ArrowButton onClick={nextExperience}>&gt;</ArrowButton>
      </ExperienceContainer>
    </Section>
  );
};

export default WorkExperience;
