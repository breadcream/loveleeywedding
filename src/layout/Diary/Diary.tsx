import styled from '@emotion/styled';
import diaryImg from '@/assets/images/05_02.png'
const Diary = styled.div`
  background-image: url(${diaryImg});
  background-size: cover; /* 배경 이미지가 요소를 꽉 채우도록 */
  background-position: center; /* 배경 이미지를 중앙에 위치 */
  background-repeat: no-repeat; /* 배경 이미지 반복 없음 */
  width: 90%;
  height: 100%; /* 또는 디자인에 맞는 높이 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* 원하면 그림자 */
`;

export default Diary;