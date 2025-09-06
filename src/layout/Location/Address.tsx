import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <PointTitle><strong>{title}</strong></PointTitle>
            <Caption textAlign={'left'}>{desc}</Caption>
          </Way>
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  text-align: center;
`;
const Way = styled.div`
  text-align: center;
  position: relative;  
  margin-bottom: 10%;
  &::after {
    content: '';
    display: block;
    width: 60%;             /* 👈 원하는 길이 */
    border-bottom: 1px solid #dfdfdf;
    margin: 0 auto;         /* 가운데 정렬 */
  }
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
`;
