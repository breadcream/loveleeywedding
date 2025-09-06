import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore fill="#black" />
        </span>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 75%;          /* 부모 기준 70% */
  margin: 0 auto;      /* 중앙 정렬 */
  border: 1px solid #f2f2f2;
  margin-bottom: 20px;
  border-radius: 10px;
  font-size: 14px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.0), 0 6px 6px rgba(0,0,0,0.12);
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 0 15px;
  cursor: pointer;
  & > p {
    color: #44484d;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff;
`;
