import { motion } from 'framer-motion';
// props의 타입을 정의하는 인터페이스를 생성합니다.

interface AnimatedComponentProps {
  children: React.ReactNode; // children prop의 타입을 React.ReactNode로 명시합니다.
}

// 함수 컴포넌트에 정의된 props 타입을 적용합니다.

function AnimatedComponent({ children }: AnimatedComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }} // 스크롤 시마다 애니메이션 재실행
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      {children}
    </motion.div>

  );

}

export default AnimatedComponent;