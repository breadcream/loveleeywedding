// Toast.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import styled from '@emotion/styled';

interface ToastContextType {
  toast: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within Toast");
  return context.toast;
};

interface ToastItem {
  id: number;
  message: string;
}

export const Toast: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = (message: string, duration = 1000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toasts.length > 0 && <Overlay />} {/* 배경 추가 */}
      <ToastContainer>
        {toasts.map(t => (
          <ToastBox key={t.id}>🤍{t.message}</ToastBox>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5); /* 어둡게 */
  z-index: 9998; /* ToastContainer보다 낮게 */
  pointer-events: none; /* 클릭 방해 안 함 */
`;

// 스타일
const ToastContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // 가로 + 세로 가운데
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
  pointer-events: none; // 클릭 방해 안 되도록
`;

const ToastBox = styled.div`
  background: #fff;
  color: black;
  padding: 12px 20px;
  border-radius: 10px;
  min-width: 230px;
  max-width: 230px;
  min-height: 170px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideIn 0.3s forwards, fadeOut 0.3s forwards 2.7s;
  font-size: 14px;

  // 글씨 중앙 정렬
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;