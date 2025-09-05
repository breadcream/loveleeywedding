import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: rgb(242, 242, 242);
  border-radius: 15px;
  text-align: center;
`;