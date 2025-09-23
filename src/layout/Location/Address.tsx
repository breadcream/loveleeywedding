import styled from '@emotion/styled';
import data from 'data.json';
import { AddressCaption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      <PointTitle><strong>{data.locationTitle}</strong></PointTitle>
      <AddressCaption>{data.locationTitle2}</AddressCaption>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <AddressCaption><strong>{title}</strong></AddressCaption>
            <AddressCaption textAlign={'left'} >{desc}</AddressCaption>
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
  text-align: left;
  position: relative;  
  margin-bottom: 10%;
  &::after {
    content: '';
    display: block;
    border-bottom: 1px solid #dfdfdf;
    margin: 0 auto;         /* 가운데 정렬 */
  }
  &:last-of-type::after {
    display: none; /* 마지막 요소는 줄 제거 */
  }
`;
