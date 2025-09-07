import styled from '@emotion/styled';
import data from 'data.json';
import { Caption } from '@/components/Text.tsx';

const Notice = () => {
  return (
    <InvitationWrapper>
      <Caption>{data.notice}</Caption>
    </InvitationWrapper>
  );
};

export default Notice;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  text-align: center;
  background-color: rgb(242, 242, 242);
  border-radius: 15px;
  --MARGIN: calc(var(--CARD-W) * 0.07);
`;