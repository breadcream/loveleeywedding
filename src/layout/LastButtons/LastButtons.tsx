import { useEffect } from 'react';
import styled from '@emotion/styled';
import RoundButton from '@/components/RoundButton.tsx';

const LastButtons = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_APP_KAKAO_KEY);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('주소가 복사되었습니다.😉😉');
      },
      () => {
        alert('주소 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  const shareKaKao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 124095
    });
  };
  return (
    <MapButtonWrapper>
      <RoundButton onClick={handleCopy}>링크 공유하기</RoundButton>
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
