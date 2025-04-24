import { useState } from 'react';
import { AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import tennisCourts from "../tennisCourts.json";

const Markers = () => {
  const [selectedCourt, setSelectedCourt] = useState(null);

  const handleMarkerClick = (court) => {
    setSelectedCourt(court);
  };

  const handleCloseInfoWindow = () => {
    setSelectedCourt(null);
  };

  return (
    <div>
      {tennisCourts.map((court) => (
        <AdvancedMarker
          key={court.name}
          position={{ lat: court.lat, lng: court.lng }}
          onClick={() => handleMarkerClick(court)}
        >
          <span>🎾</span>
        </AdvancedMarker>
      ))}

      {selectedCourt && (
        <InfoWindow
          position={{ lat: selectedCourt.lat, lng: selectedCourt.lng }}
          onCloseClick={handleCloseInfoWindow}
        >
          <p>{selectedCourt.name}</p>
        </InfoWindow>
      )}
    </div>
  );
};

export default Markers;