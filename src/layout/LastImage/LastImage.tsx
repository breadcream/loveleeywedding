import styled from '@emotion/styled';
import lastImg from '@/assets/images/05_03.png'
import { useEffect } from 'react';

const Main = () => {
  // 🔒 뒤로가기 방지
  useEffect(() => {
    // 현재 URL로 더미 state 추가
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // 사용자가 뒤로가기 했을 때 다시 현재 페이지로 고정
      window.history.pushState(null, '', window.location.href);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return (
    <div>lastImg
      <LastImg src={lastImg} />
    </div>
  );
};

export default Main;

const LastImg = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: -30px;
`;