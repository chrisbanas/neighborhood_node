import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
// import { useHistory } from "react-router-dom";
import './PostMap.css';

function PostMap({
  post,
  mapOptions = {},
}) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Create the map and marker
  useEffect(() => {
    if (!map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: {
          lat: post.latitude,
          lng: post.longitude,
        },
        zoom: 13,
        clickableIcons: true,
        ...mapOptions,
      });

      const newMarker = new window.google.maps.Marker({
        position: { lat: post.latitude, lng: post.longitude },
        map: newMap,
      });

      // Store the map and marker references
      setMap(newMap);
      markerRef.current = newMarker;
    } else {
      // Update the marker position
      markerRef.current.setPosition({ lat: post.latitude, lng: post.longitude });
    }
  }, [mapRef, map, mapOptions, post.latitude, post.longitude]);

  return <div ref={mapRef} className="map">Map</div>;
}

export default function PostMapWrapper(props) {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      Location
      <PostMap {...props} />
    </Wrapper>
  );
}
