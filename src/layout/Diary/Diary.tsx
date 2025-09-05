import styled from '@emotion/styled';
import diaryImg from '@/assets/images/05_02.png'
const Diary = () => {
  return (
    <div>
      <DiaryImg src={diaryImg} />
    </div>
  );
};

export default Diary;

const DiaryImg = styled.img`
  width: 80vw;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;