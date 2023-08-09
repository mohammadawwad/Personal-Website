import React, { useEffect, useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Projects from '../Projects/Projects';
import { render } from 'react-dom';
// import {Color} from '../Header/Switch';

const data = [
  { number: "1st Place", text: '2017 Victoria FRC Competition'},
  { number: "2nd Place", text: '2020 Victoria FRC Competition'},
  { number: "3rd Place", text: 'Replit Alexa Hackathon'},
  { number: "5+", text: 'Hackathons'},
  { number: "20+", text: 'Mentored over 20 students', },
  { number: "Finalists", text: 'FRC Houston World Championship'},
  { number: "Winner", text: 'Recieved chairmans prestigious FRC award'},
  { number: "3rd Place", text: '2022 Victoria Frc Competition'},
  { number: "Course", text: 'Emerge SFU Web Dev Course'},
  { number: "Course", text: 'Systems Design Training'},
];

// export const Color = () => {
//   let color = false;
//   if(color == false){
//     console.log(color);
//     color = true;
//   }
//   if(color == true){
//     console.log(color);
//     color = false;
//   }
// } 

const Acomplishments = () => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will be called every 1 seconds');
  //     Color();
  //   }, 1000);
  
  //   return () => clearInterval(interval);
  // }, []);

    return(
      <>
        <Section style={{marginTop: '50px'}}>
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
        {/* <div>
          {
            console.log("Test: " + Color())
          }
          {
            Color() ? <Projects color="#f5f5f5"/> : <Projects color="#0F1624"/>
          }
        </div> */}
      </>
    );
}



export default Acomplishments;
