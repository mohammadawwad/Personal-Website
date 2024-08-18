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
  left: 20%;
  width: 2px;
  background-color: #9cc9e3;
  padding: 50px 0;
  margin: 50px 0;
`;

export const ExperienceCard = styled.div`
  position: relative;
  left: 25%;
  width: 350px;
  margin: 20px 0;
  padding: 20px;
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
  width: ${({ active }) => (active ? '14px' : '12px')};
  height: ${({ active }) => (active ? '14px' : '12px')};
  background-color: ${({ active }) => (active ? '#9cc9e3' : 'transparent')};
  border: 2px solid #9cc9e3;
  border-radius: 50%;
  position: absolute;
  left: -32px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;

  &:hover {
    background-color: #80a9ff;
    width: 16px;
    height: 16px;
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
`;

export const CompanyName = styled.h4`
  color: #d4af37;
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

