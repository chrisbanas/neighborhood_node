import React, { useState } from "react";
import { GoogleMap, Marker } from "@googlemaps/react-wrapper";
import "./PostAddLocation.css";

export default function PostAddLocation() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setSelectedLocation({ lat, lng });
  };

  const handleSaveLocation = () => {
    // TODO: handle saving selectedLocation to the backend
    console.log(selectedLocation);
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMap
        mapContainerStyle={{ height: "100%", width: "100%" }}
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={8}
        onClick={handleMarkerClick}
      >
        {selectedLocation && (
          <Marker
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onClick={handleMarkerClick}
          />
        )}
      </GoogleMap>
      {selectedLocation && (
        <button onClick={handleSaveLocation}>Save Location</button>
      )}
    </div>
  );
};
