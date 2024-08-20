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

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 10px;
    height: 10px;
    left: 10.3%;
    top: 25px;
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

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 0;
  }
`;

export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

   @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }
`;

export const VerticalTimeline = styled.div`
  position: absolute;
  left: 20%; /* Adjusted for center alignment with dots */
  width: 2px;
  height: 100%;
  background-color: #9cc9e3;

  @media ${(props) => props.theme.breakpoints.sm} {
    left: 10%;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 50px; /* Adjust spacing between items */

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 30px;
    align-items: flex-start;
  }
`;

export const ExperienceCard = styled.div`
  position: relative;
  width: 550px;
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

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-left: 20px;
    padding: 20px;
    left: 12%;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const CompanyLogo = styled.img`
  max-width: 80px;
  max-height: 50px;
  margin-bottom: 10px;
  position: absolute;
  right: 10px;
  top: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 60px;
    max-height: 40px;
  }
`;

export const CompanyName = styled.h4`
  color: #8A2BE2;  /* Purple color for the company name */
  font-size: 1.6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const DateRange = styled.p`
  color: #888;
  font-size: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const CardInfo = styled.p`
  font-size: 1.6rem;
  color: #e4e6e7;
  line-height: 1.5;
  margin-top: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    line-height: 1.3;
  }
`;

export const Tags = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  background-color: #1c2a39; /* Darker background color to match the card theme */
  border: 1px solid #9cc9e3; /* Border color to match the dot and timeline */
  border-radius: 15px; /* Rounded corners for a more modern look */
  padding: 0.5rem 1rem; /* Extra padding for better spacing */
  margin: 0.3rem 0.5rem; /* More balanced margin */
  font-size: 1.2rem; /* Font size */
  color: #9cc9e3; /* Text color to match the theme */
  display: inline-block;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #9cc9e3; /* Hover background to match other elements */
    color: #1c2a39; /* Text color changes on hover */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;
