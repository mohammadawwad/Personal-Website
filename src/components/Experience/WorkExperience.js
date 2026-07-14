import React from 'react';
import {
  ExperienceCard,
  ExperienceContainer,
  VerticalTimeline,
  Dot,
  HeaderThree,
  CompanyLogos,
  CompanyLogo,
  CompanyName,
  DateRange,
  CardInfo,
  TimelineWrapper,
  TimelineItem,
  Tags,
  Tag,
} from './WorkExperienceStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Experiences } from '../../constants/constants';

const WorkExperience = () => {
  // Prepare JSX elements outside the return
  const sectionHeader = (
    <Section nopadding id="experience"  style={{paddingTop: '60px'}}>
      <SectionTitle main>Work Experience</SectionTitle>
    </Section>
  );

  return (
    <>
      {sectionHeader}
      <ExperienceContainer>
        <TimelineWrapper>
          <VerticalTimeline />
          {Experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <Dot active={index === 0} />
              <ExperienceCard>
                <HeaderThree>{exp.title}</HeaderThree>
                <CompanyName>{exp.company}</CompanyName>
                {exp.logos && exp.logos.length > 0 && (
                  <CompanyLogos>
                    {exp.logos.map((logo, idx) => (
                      <CompanyLogo key={idx} src={logo} alt={`${exp.company} logo`} />
                    ))}
                  </CompanyLogos>
                )}
                <DateRange>{exp.dateRange}</DateRange>
                <CardInfo>{exp.description}</CardInfo>
                {exp.tags && (
                  <Tags>
                    {exp.tags.map((tag, idx) => (
                      <Tag key={idx}>{tag}</Tag>
                    ))}
                  </Tags>
                )}
              </ExperienceCard>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </ExperienceContainer>
    </>
  );
};

export default WorkExperience;
