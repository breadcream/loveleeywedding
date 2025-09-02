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
      {/* <MainImg src={subImg} /> */}
      {/* <MainTitle>{greeting.title}</MainTitle> */}
      <Invitation>{greeting.eventMainDetail}</Invitation>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: -60px;
`;

// const MainTitle = styled.p`
//   font-family: HSSanTokki20-Regular, serif;
//   font-size: 2rem;
//   color: #2F2120;
//   line-height: 120%;
//   white-space: pre-line;
// `;

const Invitation = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
