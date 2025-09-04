import styled from '@emotion/styled';
import subImg from '@/assets/images/05_01.png'
const Sub = () => {
  return (
    <div>
      <SubImg src={subImg} />
    </div>
  );
};

export default Sub;

const SubImg = styled.img`
  width: 60vw;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 230px;
  margin-bottom: 200px;
`;