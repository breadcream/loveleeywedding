import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useToast } from '@/components/Toast.tsx';
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp;
}

const CommentForm = () => {
  const [isOpen, setIsOpen] = useState(false); // 팝업 열기 상태
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const toast = useToast();

  const collectionRef = collection(db, "loveleey_guestbook");

  useEffect(() => {
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: GuestbookEntry[] = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<GuestbookEntry, "id">),
      }));
      setEntries(data);
    });

    return () => unsubscribe();
  }, []);

  const addGuestbook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !message) {
      toast("이름과 메시지를 입력해주세요.");
      return;
    }

    try {
      await addDoc(collectionRef, {
        name,
        message,
        createdAt: Timestamp.now(),
      });
      toast("💌");
      setName("");
      setMessage("");
      setIsOpen(false); // 전송 후 팝업 닫기
    } catch (err) {
      console.error(err);
      toast("메시지 전송에 실패했습니다.");
    }
  };

  const deleteEntry = async (id: string) => {
    try {
      await deleteDoc(doc(db, "loveleey_guestbook", id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      {/* 댓글 작성 팝업 */}
      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            {/* <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton> */}
            <FormWrapper onSubmit={addGuestbook}>
              <NameInput
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MessageInput
                placeholder="메시지"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <SubmitButton type="submit">등록</SubmitButton>
            </FormWrapper>
          </Modal>
        </Overlay>
      )}

      {/* 팝업 열기 버튼 */}
      <WriteButton onClick={() => setIsOpen(true)}>방명록 작성</WriteButton>

      {/* 기존 댓글 목록 */}
      <EntriesWrapper>
        {entries.map(entry => (
          <Entry key={entry.id}>
            <EntryHeader>
              <strong>{entry.name}</strong>
              <DeleteButton onClick={() => deleteEntry(entry.id)}>×</DeleteButton>
            </EntryHeader>
            <EntryMessage>{entry.message}</EntryMessage>
            <EntryFooter>
              <EntryDate>{entry.createdAt.toDate().toLocaleString()}</EntryDate>
            </EntryFooter>
          </Entry>
        ))}
      </EntriesWrapper>
    </Container>
  );
};

// 스타일
const Container = styled.div`
  width: 100%; 
  max-width: 600px; 
  margin: auto;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;   // 좌우 중앙
  justify-content: center; // 상하 중앙
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%; // 버튼과 입력창이 Modal 폭을 따라가도록
  align-items: center; // 좌우 중앙
`;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 8px; right: 12px;
//   border: none;
//   background: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

const NameInput = styled.input`
  width: 90%; // 중앙 정렬 감안해서 적당한 폭
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  font-family: inherit;

  &::placeholder {
    text-align: center; // placeholder 중앙 정렬
  }
`;

const MessageInput = styled.textarea`
  width: 90%;
  height: 100px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  resize: none;
  font-family: inherit;

  &::placeholder {
    text-align: center; // placeholder 중앙 정렬
  }
`;

const EntriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Entry = styled.div`
  border: 1px solid #eee; 
  border-radius: 4px; 
  padding: 8px; 
  background-color: #fafafa;
  position: relative;
`;

const EntryHeader = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 4px; 
  font-size: 0.9rem; 
  color: #555;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
  color: #999;
  &:hover { color: red; }
`;

const EntryMessage = styled.div`
  font-size: 1rem; 
  color: #333; 
  margin-bottom: 6px;
`;

const EntryFooter = styled.div`
  display: flex; 
  justify-content: flex-end;
`;

const EntryDate = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

const WriteButton = styled.button`
  width: 100%; 
  padding: 8px; 
  height: 48px; 
  border-radius: 8px; 
  border: none; 
  font-size: 0.9rem; 
  background-color: rgb(242, 242, 242); 
  cursor: pointer; 
  font-color: black;
  font-family: SUITE-Regular, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; 
  margin-bottom: 5%;
`;

const SubmitButton = styled.button`
  width: 100%; 
  padding: 8px; 
  height: 48px; 
  border-radius: 8px; 
  border: none; 
  font-size: 0.9rem; 
  background-color: rgb(242, 242, 242); 
  cursor: pointer; 
  font-family: SUITE-Regular, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; 
`;

export default CommentForm;
