import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import Markers from './Markers';
import Address from './Address';

const MapComponent = () => {
  const position = {
    lat: 33.95,
    lng: -84.55
  };


  return (
    <APIProvider apiKey={import.meta.env.VITE_APIKEY}>
      <div style={{height: "100vh", width: "90%"}}>
        <Map zoom={11}
        center={position}
          mapId={"bf80bcf1fdfc6b01"}>
          <Markers />

        </Map>
      </div>
    </APIProvider>
    
  );
};

export default MapComponent;

