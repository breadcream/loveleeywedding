import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg'
import { useEffect } from 'react';

const Main = () => {
  const { greeting } = data;

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
    <div>
      <MainImg src={mainImg} />
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: -30px;
`;

const SubTitle = styled.p`
  font-family: "Meddon", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 2.1rem;
  text-align: center;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
