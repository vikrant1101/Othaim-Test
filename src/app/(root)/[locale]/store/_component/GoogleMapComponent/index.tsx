'use client';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

interface MarkerProps {
  storeName: string;
}

const Marker: React.FC<MarkerProps & { lat: number; lng: number }> = ({ storeName }) => (
  <div style={{ position: 'relative' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="43" viewBox="0 0 32 43" fill="none">
      <g clipPath="url(#clip0_16890_4885)">
        <path
          d="M32 16C32 25.3333 16 42.6667 16 42.6667C16 42.6667 0 25.3333 0 16C0 7.16667 7.16667 0 16 0C24.8333 0 32 7.16667 32 16Z"
          fill="#9DC41A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.0588 14.1441L25.8104 12.8631L25.8087 12.8616C23.6667 14.3464 22.7034 14.4898 22.7482 14.4675C22.7913 14.3671 22.8311 14.2683 22.8676 14.1696C24.8339 8.85629 17.5688 6.37093 12.7724 9.14944C6.28987 12.9046 5 12.9715 5 12.9715C16.5144 18.8822 27.0588 14.1441 27.0588 14.1441ZM9.37719 15.9094C12.5983 17.0235 17.3614 17.9535 23.3652 17.0935V17.0919C23.3652 17.0919 23.5057 17.6115 23.5294 18.3395C23.46 21.4699 19.853 23.3332 16.2256 22.9505C8.7289 22.1589 5 14.1765 5 14.1765C5 14.1765 6.29149 14.8426 9.37719 15.9094Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_16890_4885">
          <rect width="32" height="42.6667" fill="white" />
        </clipPath>
      </defs>
    </svg>
    {storeName && (
      <span style={{ position: 'absolute', top: '35px', left: '-10px', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
        {storeName}
      </span>
    )}
  </div>
);

const GoogleMapComponent = ({ filteredStores, initialStores}: any) => {
	const params = useParams()
	const curLang =  params?.locale || 'en';
	const [map, setMap] = useState<any>(null);
	const [center, setCenter] = useState({ lat: 24.603258, lng: 46.704749 }); // Default center
	const [zoom, setZoom] = useState(12); 
//	const [mapKey, setMapKey] = useState(Date.now()); 
  
  const calculateCenterAndZoom = (stores: any) => {
    const latitudes = stores.map((store: any) => parseFloat(store.Latitude));
    const longitudes = stores.map((store: any) => parseFloat(store.Longitude));

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

    const newCenter = {
      lat: (minLat + maxLat) / 2,
      lng: (minLng + maxLng) / 2,
    };

    const latDiff = maxLat - minLat;
    const lngDiff = maxLng - minLng;
    const maxDiff = Math.max(latDiff, lngDiff);
    let newZoom = 12; 

    if (maxDiff > 0.5) newZoom = 10; // Zoom out if stores are far apart
    else if (maxDiff > 0.1) newZoom = 12; // Medium zoom
    else newZoom = 12; // Zoom in if stores are close
    return { newCenter, newZoom };
  };
  // useEffect(() => {
  //   setMapKey(Date.now());
  // }, [curLang]);

  useEffect(() => {
    const storesToUse = filteredStores?.length > 0 ? filteredStores : initialStores;
    const validStores = storesToUse.filter((store: any) => {
      const lat = parseFloat(store.Latitude);
      const lng = parseFloat(store.Longitude);
      return !isNaN(lat) && !isNaN(lng);
    });

    if (validStores.length === 0) {
      console.error('No valid store coordinates found.');
      return;
    }

    const { newCenter, newZoom } = calculateCenterAndZoom(validStores);
    setCenter(newCenter);
    setZoom(newZoom);

    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      validStores.forEach((store: any) => {
        const lat = parseFloat(store.Latitude);
        const lng = parseFloat(store.Longitude);
        bounds.extend(new window.google.maps.LatLng(lat, lng));
      });
      map.fitBounds(bounds);
    }
  }, [filteredStores, initialStores, map, curLang]);

  const handleApiLoaded = ({ map, maps }: any) => {
    setMap(map);
    // Set initial bounds if stores are available
    const storesToUse = filteredStores.length > 0 ? filteredStores : initialStores;
    const validStores = storesToUse.filter((store: any) => {
      const lat = parseFloat(store.Latitude);
      const lng = parseFloat(store.Longitude);
      return !isNaN(lat) && !isNaN(lng);
    });

    if (validStores.length === 0) {
      console.error('No valid store coordinates found.');
      return;
    }

    const bounds = new maps.LatLngBounds();
    validStores.forEach((store: any) => {
      const lat = parseFloat(store.Latitude);
      const lng = parseFloat(store.Longitude);
      bounds.extend(new maps.LatLng(lat, lng));
    });
    map.fitBounds(bounds);
  };
 

  return (
    <div style={{ height: '500px',maxHeight:'500px',width: '100%' }}>
     <GoogleMapReact
		bootstrapURLKeys={{ 
			key: `${process.env.NEXT_PUBLIC_MAP_KEY}`,
		}} 
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
      >
        {(filteredStores.length > 0 ? filteredStores : initialStores).map((store: any, index: any) => {
          const lat = parseFloat(store.Latitude);
          const lng = parseFloat(store.Longitude);
          if (isNaN(lat) || isNaN(lng)) {
            return null;
          }

          return <Marker key={store.StoreId || index} lat={lat} lng={lng} storeName={''} />;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMapComponent;
