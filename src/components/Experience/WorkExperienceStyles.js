import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 50px 0;
`;

export const VerticalTimeline = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20%; /* Adjusted for center alignment with dots */
  width: 2px;
  height: 90%;
  background-color: #9cc9e3;
  padding: 50px 0;
  margin: 50px 0;
`;

export const ExperienceCard = styled.div`
  position: relative;
  left: 22%; /* Adjusted for new card width */
  width: 500px;  
  margin: 20px 0;
  padding: 30px; 
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 10px;
  background-color: #0f1624;
  text-align: left;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ active }) => (active ? '#9cc9e3' : 'transparent')};
  border: 2px solid #9cc9e3;
  border-radius: 50%;
  position: absolute;
  left: -5.2%;  /* Centered on the line */
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.3s ease; /* Changed to only affect the background color on hover */

  &:hover {
    background-color: ${({ active }) => (active ? '#9cc9e3' : '#9cc9e3')}; /* Fills in the dot on hover */
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: 2rem;
`;

export const CompanyLogo = styled.img`
  max-width: 80px;
  max-height: 50px;
  margin-bottom: 10px;
  position: absolute;
  right: 10px;
  top: 20px;   /* Adjusted position to align with text */
`;

export const CompanyName = styled.h4`
  color: #8A2BE2;  /* Purple color for the company name */
  font-size: 1.6rem;
`;

export const DateRange = styled.p`
  color: #888;
  font-size: 1.4rem;
`;

export const CardInfo = styled.p`
  font-size: 1.2rem;
  color: #e4e6e7;
  line-height: 1.5;
  margin-top: 10px;
`;
