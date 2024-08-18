import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 50px 0;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 5px;
  background-color: #9cc9e3; /* Vertical timeline color */
`;

export const ExperienceCard = styled.div`
  position: relative;
  width: 70%;
  padding: 20px;
  margin: 20px 0;
  background-color: #0f1624;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    left: -27px;
    top: 20px;
    width: 12px;
    height: 12px;
    background-color: #d4af37; /* Dot color */
    border: 3px solid #9cc9e3;
    border-radius: 50%;
    z-index: 2;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const CompanyLogo = styled.img`
  max-width: 80px;
  max-height: 50px;
  margin-bottom: 10px;
`;

export const CompanyName = styled.h4`
  color: #d4af37;
  font-size: 1.6rem;
  margin-bottom: 10px;
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
