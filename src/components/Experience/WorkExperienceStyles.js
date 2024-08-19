import styled from 'styled-components';

// Define Dot component first
export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ active }) => (active ? '#9cc9e3' : '#0f1624')}; /* Background color for the dot */
  border: 2px solid #9cc9e3; /* Blue ring */
  border-radius: 50%;
  position: relative; /* Ensure the inner circle is positioned relative to this dot */
  left: 20.1%; /* Centered on the line */
  transform: translateX(-50%);
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    display: ${({ active }) => (active ? 'none' : 'block')}; /* Hide the inner purple circle for the latest */
    width: 50%;
    height: 50%;
    background-color: #8A2BE2; /* Purple */
    border-radius: 50%;
    position: absolute; /* Use absolute positioning */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Center the circle */
  }
`;


// Define other components that use Dot
export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 50px 0;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const VerticalTimeline = styled.div`
  position: absolute;
  left: 20%; /* Adjusted for center alignment with dots */
  width: 2px;
  height: 100%;
  background-color: #9cc9e3;
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 50px; /* Adjust spacing between items */
`;

export const ExperienceCard = styled.div`
  position: relative;
  width: 500px;
  margin-left: 40px; /* Adjust distance between the dot and the card */
  padding: 30px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 10px;
  background-color: #0f1624;
  text-align: left;
  transition: transform 0.3s ease-in-out;
  left: 23%;

  &:hover {
    transform: scale(1.05);
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
  top: 20px;
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
