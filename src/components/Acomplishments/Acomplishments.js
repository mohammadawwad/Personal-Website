import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "1st Place", text: '2017 Victoria FRC Competition'},
  { number: "2nd Place", text: '2020 Victoria FRC Competition'},
  { number: "3rd Place", text: 'Replit Alexa Hackathon'},
  { number: "5+", text: 'Hackathons'},
  { number: "20+", text: 'Mentored over 20 students', },
  { number: "Finalists", text: 'FRC Houston World Championship'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
