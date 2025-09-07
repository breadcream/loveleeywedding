import { useEffect, useRef, useState } from 'react';
import { Heading1 } from '@/components/Text.tsx';
import { Heading2 } from '@/components/Text.tsx';
import { Heading3 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import WrapperPull from '@/components/WrapperPull.tsx';
import Account from '@/layout/Account/Account.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryHeart from '@/layout/GalleryHeart/GalleryWrap.tsx';
import GallerySlide from '@/layout/GallerySlide/GallerySlide.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import KakaoMap from '@/layout/Location/KakaoMap.tsx';
import MapButtons from '@/layout/Location/MapButtons.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import Sub from '@/layout/Sub/Sub.tsx';
import Diary from '@/layout/Diary/Diary.tsx';
import Notice from '@/layout/Notice/Notice.tsx';
import LastButtons from '@/layout/LastButtons/LastButtons.tsx';
import styled from '@emotion/styled';
import AnimatedComponent from './components/AnimatedComponent.tsx';
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

  const AppContainer = styled.div`
  width: 100%;
  max-width: 460px;     /* 콘텐츠 최대 폭 */
  margin: 0 auto;       /* 가운데 정렬 */
  position: relative;
`;

const FullWidthSection = styled.div<{ bg?: string }>`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: ${({ bg }) => (bg ? `url(${bg}) center/cover no-repeat` : 'transparent')};
  position: relative;
  overflow: visible;
  padding: 20px 0;

  /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

  return (
      <AppContainer>
        <AnimatedComponent>
          <FullWidthSection>
            <Wrapper>
              <Main />
            </Wrapper>
          </FullWidthSection>
        </AnimatedComponent>
        <AnimatedComponent>
          <Wrapper>
            <Heading1>Invitation</Heading1>
            <Invitation />
            <Sub />
          </Wrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          <WrapperPull
            style={{
                backgroundColor: '#f3e6c9'
                // backgroundColor: '#B5C7D3'
                // backgroundColor: '#cee7ef'
            }}>
            <Heading1           
              style={{
                marginBottom: '10%',
                color:'white'
              }}>Our Growth Story</Heading1>
            <Diary>
              <GalleryHeart />
            </Diary>
            <Heading3           
              style={{
                marginBottom: '10%',
                color:'white'
              }}>Slide me</Heading3>
          </WrapperPull>
        </AnimatedComponent>
        <AnimatedComponent>
          <Wrapper ref={galleryRef}>
            <GallerySlide />
          </Wrapper>
        </AnimatedComponent>
        {/* <AnimatedComponent>
          <Wrapper ref={galleryRef}>
            <Heading1>Gallery</Heading1>
            <GalleryWrap />
          </Wrapper>
        </AnimatedComponent> */}
        <AnimatedComponent>
          <Wrapper>
            <Heading2>마음 전하실 곳</Heading2>
            <Account />
          </Wrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          <Wrapper>
            <Heading1>Location</Heading1>
            <KakaoMap />
            <MapButtons />
          </Wrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          <Wrapper>
            <Location/>
          </Wrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          <Wrapper>
          <Heading1>Message</Heading1>
          <Guestbook />
        </Wrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          <Wrapper>
            <Heading1>Notice</Heading1>
            <Notice />
          </Wrapper>
        </AnimatedComponent>
        <LastButtons/>
        <FloatingBar isVisible={isVisible} />
    </AppContainer>
  );
}

export default App;
