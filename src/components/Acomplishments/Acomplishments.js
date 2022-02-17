import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "1st", text: '2017 Victoria FRC Competition'},
  { number: "2nd", text: '2020 Victoria FRC Competition'},
  { number: "3rd", text: 'Replit Alexa Hackathon'},
  { number: "5+", text: 'Hackathons'},
  { number: "20+", text: 'Mentees', },
  { number: "World Championship", text: '2019 FRC Houston World Championship contenders'},
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
