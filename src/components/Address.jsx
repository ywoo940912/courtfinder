import React, { useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const Address = ({ onAddressSubmit }) => {
  const [address, setAddress] = useState('');
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:'AIzaSyDqIwap2Z2u8DOkvYk-pJHF_oNFJPCvCEQ',
    libraries,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      onAddressSubmit(address);
      setAddress('');
    } else {
      alert('Please enter an address.');
    }
  };

  if (loadError) return <div>Error loading maps!</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10, backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <p>Enter your address:</p>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          onPlaceChanged={(place) => {
            if (place) {
              setAddress(place.formatted_address);
            }
          }}
        >
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g., 123 Main St, Marietta, GA"
            style={{ padding: '0.5rem', fontSize: '1rem', width: '300px', borderRadius: '3px', border: '1px solid #ccc' }}
          />
        </Autocomplete>
        <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginLeft: '5px' }}>
          Find Courts
        </button>
      </form>
    </div>
  );
};

export default Address;