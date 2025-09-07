import { useEffect } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import RoundButton from '@/components/RoundButton.tsx';

interface Window {
  Kakao: any;
}

const LastButtons = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_APP_KAKAO_KEY);
    }
  }, []);

  const { naverMap } = data.mapInfo;
  const shareKaKao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 124095
    });
  };
  return (
    <MapButtonWrapper>
      <RoundButton onClick={() => window.open(naverMap)}>링크 공유하기</RoundButton>
      <RoundButton onClick={() => shareKaKao()}>카카오톡 공유하기</RoundButton>
    </MapButtonWrapper>
  );
};

export default LastButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 20%;
`;
