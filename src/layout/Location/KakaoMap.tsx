import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import data from 'data.json';

const KakaoMap = () => {
  const { lat, lon } = data.mapInfo;
  
  const [error] = useKakaoLoader({
    appkey: '6fb9ec737fa5bf38d3540fbaf572a9d8',
    // appkey: import.meta.env.VITE_APP_KAKAOMAP_JAVASCRIPT_KEY,
    libraries: ['services', 'clusterer']
  });

  if (error) {
    return <div>카카오맵을 불러오는데 실패했습니다.</div>;
  }

  return (
    <Map 
      center={{ lat, lng: lon }} 
      style={{ width: '100%', height: '230px', border: '1px solid #f2f2f2', borderRadius: '10px' }}
      level={3}
    >
      <MapMarker position={{ lat, lng: lon }} />
    </Map>
  );
};

export default KakaoMap;