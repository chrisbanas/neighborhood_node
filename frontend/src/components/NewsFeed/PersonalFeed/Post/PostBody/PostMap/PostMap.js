import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
// import { useHistory } from "react-router-dom";
import './PostMap.css';

function PostMap({
  posts,
  highlightedPost,
  mapOptions = {},
  mapEventHandlers = {}
}) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const markers = useRef({});

  // Create the map
  useEffect(() => {
    if (!map) {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: {
          lat: 37.773972,
          lng: -122.431297
        },
        zoom: 13,
        clickableIcons: false,
        ...mapOptions,
      }));
    }
  }, [mapRef, map, mapOptions]);

  // Add event handlers to map
  useEffect(() => {
    if (map) {
      const listeners = Object.entries(mapEventHandlers).map(([event, handler]) =>
        window.google.maps.event.addListener(
          map,
          event,
          (...args) => handler(...args, map)
        )
      );

      return () => listeners.forEach(window.google.maps.event.removeListener);
    }
  }, [map, mapEventHandlers]);

  // Add markers to the map
  useEffect(() => {
    if (map && posts) {
      posts.forEach((post) => {
        if (!markers.current[post.id]) {
          const marker = new window.google.maps.Marker({
            position: { lat: post.latitude, lng: post.longitude },
            map,
            title: post.title,
            label: post.id.toString(),
          });

          markers.current[post.id] = marker;
        }
      });
    }
  }, [map, posts]);

  // Change the style for post marker on hover
  useEffect(() => {
    Object.entries(markers.current).forEach(([postId, marker]) => {
      const label = marker.getLabel();
      const icon = marker.getIcon();

      if (parseInt(postId) === highlightedPost) {
        marker.setLabel({ ...label, color: 'white' });
        marker.setIcon({ ...icon, fillColor: 'black' });
      } else {
        marker.setLabel({ ...label, color: 'black' });
        marker.setIcon({ ...icon, fillColor: 'white' });
      }
    });
  }, [markers, highlightedPost]);

  return (
    <div ref={mapRef} className="map">
      Map
    </div>
  );
}

export default function PostMapWrapper(props) {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      Location
      <PostMap {...props} />
    </Wrapper>
  );
}
