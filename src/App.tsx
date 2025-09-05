import { useEffect, useRef, useState } from 'react';
import { Heading1 } from '@/components/Text.tsx';
import { Heading2 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import GalleryHeart from '@/layout/GalleryHeart/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import KakaoMap from '@/layout/Location/KakaoMap.tsx';
import MapButtons from '@/layout/Location/MapButtons.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import Sub from '@/layout/Sub/Sub.tsx';
import Diary from '@/layout/Diary/Diary.tsx';
import { motion } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
      <Container className="container">
              <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
      }}
    >
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Heading1>Invitation</Heading1>
          <Invitation />
          <Sub />
        </Wrapper>
        <Wrapper
        style={{
            width: '100%',
            backgroundImage: "url('src/assets/images/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <Heading1>Our Growth Story</Heading1>
          <Diary />
          <GalleryHeart />
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1>Gallery</Heading1>
          <GalleryWrap />
        </Wrapper>
        <Wrapper>
          <Heading2>마음 전하실 곳</Heading2>
          <Account />
        </Wrapper>
        <Wrapper>
          <Heading1>Location</Heading1>
          <KakaoMap />
          <MapButtons />
        </Wrapper>
        <Wrapper>
          <Location />
        </Wrapper>
        <Wrapper>
          <Heading1>Message</Heading1>
          <Guestbook />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
    </motion.div>
    </Container>
  );
}

export default App;
