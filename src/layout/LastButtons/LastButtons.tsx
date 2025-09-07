import { useEffect } from 'react';
import styled from '@emotion/styled';
import RoundButton from '@/components/RoundButton.tsx';
import { useToast } from '@/components/Toast.tsx';

const LastButtons = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('6fb9ec737fa5bf38d3540fbaf572a9d8');
    }
  }, []);

  const handleCopy = () => {
    const toast = useToast(); // ✅ 컴포넌트 안에서 훅 호출
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        toast('주소가 복사되었습니다');
      },
      () => {
        toast('주소 복사에 실패했습니다');
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
