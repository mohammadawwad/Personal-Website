import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Timeline = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ current }) => `translateX(-${current * 100}%)`};
`;

export const ExperienceCard = styled.div`
  min-width: 50%;
  max-width: 50%;
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  transition: opacity 0.3s ease-in-out;
  text-align: center;
  padding: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 10px;
  background-color: ${({ active }) => (active ? '#fff' : '#f4f4f4')};
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #801414;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #5f9cbf;
  font-size: 2rem;
`;

export const CompanyName = styled.h4`
  color: #801414;
  font-size: 1.8rem;
`;

export const DateRange = styled.p`
  color: #888;
  font-size: 1.4rem;
`;

export const CardInfo = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.5;
`;
