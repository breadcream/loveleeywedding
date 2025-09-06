import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #222;
  width: 100%;
  box-sizing: border-box;
  max-width: 460px;   /* 콘텐츠 폭 제한 */
  margin-bottom: 20%;
  position: relative;
  overflow: visible;
`;

export default Wrapper;
