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
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(242, 242, 242);
  border-radius: 15px;
  text-align: center;
  padding-top: 40px;      /* 내부 글씨와 박스 위·아래 간격 확보 */
  margin: 40px;
`;