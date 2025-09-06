import { useEffect, useRef, useState } from 'react';
import { Heading1 } from '@/components/Text.tsx';
import { Heading2 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import WrapperPull from '@/components/WrapperPull.tsx';
import Account from '@/layout/Account/Account.tsx';
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
import styled from '@emotion/styled';

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
  width: 100vw;                             /* 화면 전체 폭 */
  margin-left: calc(-50vw + 50%);           /* 중앙 정렬 유지 */
  background: ${({ bg }) => (bg ? `url(${bg}) center/cover no-repeat` : 'transparent')};
  position: relative;
  overflow: visible;
  padding: 20px 0;
`;

  return (
        <AppContainer>
      <FullWidthSection>
        <Wrapper>
          <Main />
        </Wrapper>
          </FullWidthSection>

        <Wrapper>
          <Heading1>Invitation</Heading1>
          <Invitation />
          <Sub />
        </Wrapper>
        <WrapperPull>
          <Heading1           
            style={{
              marginBottom: '10%'
            }}>Our Growth Story</Heading1>
          <Diary>
            <GalleryHeart />
          </Diary>
          <Heading1           
            style={{
              marginBottom: '10%'
            }}>Slide me</Heading1>
        </WrapperPull>
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
    </AppContainer>
  );
}

export default App;
