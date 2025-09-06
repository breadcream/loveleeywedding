import styled from '@emotion/styled';
import data from 'data.json';
import RoundButton from '@/components/RoundButton.tsx';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <RoundButton onClick={() => window.open(naverMap)}>네이버 지도</RoundButton>
      <RoundButton onClick={() => window.open(kakaoMap)}>카카오맵</RoundButton>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
