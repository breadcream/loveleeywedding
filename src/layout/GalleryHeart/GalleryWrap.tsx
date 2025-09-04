import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';

const GalleryWrap = () => {
  return (
    <PhotoGallery />
    );
};

export default GalleryWrap;

const MainImg = styled.img`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: -30px;
`;