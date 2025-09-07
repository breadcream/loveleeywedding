import { useState } from 'react';
import styled from '@emotion/styled';
import { useToast } from '@/components/Toast.tsx';
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const CommentForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const collectionRef = collection(db, "loveleey_guestbook"); // 단일 컬렉션

  // 댓글 추가
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
        createdAt: Timestamp.now(), // 🔹 Timestamp 사용
      });
      toast("메시지를 보냈습니다. 💌");
      setName("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast("메시지 전송에 실패했습니다.");
    }
  };
``
  return (
    <Container>
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
      </FormWrapper>
    </Container>
  );
};

// 스타일 (이전 예제와 동일)
const Container = styled.div`width: 100%; max-width: 600px; margin: auto;`;
const FormWrapper = styled.form`display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;`;
const NameInput = styled.input`width: 100%; padding: 6px; border-radius: 4px; border: 1px solid #ccc; outline: none; font-family: inherit;`;
const MessageInput = styled.textarea`width: 100%; height: 100px; padding: 6px; border-radius: 4px; border: 1px solid #ccc; outline: none; resize: none; font-family: inherit;`;

export default CommentForm;
