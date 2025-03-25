import React, { useRef, useEffect } from 'react';

const GoogleMap = ({ apiKey, style }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      if (window.google?.maps) {
        initMap();
        return;
      }
      
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      window.document.body.appendChild(googleMapsScript);
    };
    
    // Initialize map
    window.initMap = () => {
      if (mapRef.current && !mapInstanceRef.current) {
        const position = { lat: 43.718156, lng: -79.518136 }; // Toronto coordinates
        
        // Dark mode map styles
        const darkMapStyles = [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ];

        // Create map
        const map = new window.google.maps.Map(mapRef.current, {
          center: position,
          zoom: 13,
          disableDefaultUI: true,
          zoomControl: true,
          styles: darkMapStyles,
        });
        
        // Add custom marker with animation
        const marker = new window.google.maps.Marker({
          position: position,
          map: map,
          animation: window.google.maps.Animation.DROP,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#DA0037",
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#FFFFFF",
          },
        });
        
        // Add info window with company info
        const infoContent = `
          <div class="map-info-window">
            <h3>AAXI Headquarters</h3>
            <p>123 Metal Way, Toronto, ON</p>
            <p>M1M 1M1, Canada</p>
          </div>
        `;
        
        const infoWindow = new window.google.maps.InfoWindow({
          content: infoContent,
        });
        
        // Show info window when marker is clicked
        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
        
        // Optional: Open info window by default
        // infoWindow.open(map, marker);
        
        mapInstanceRef.current = map;
      }
    };
    
    loadGoogleMapsScript();
    
    return () => {
      // Clean up
      window.initMap = null;
      const script = document.querySelector(`script[src*="maps.googleapis.com/maps/api"]`);
      if (script) {
        script.remove();
      }
    };
  }, [apiKey]);

  return <div ref={mapRef} style={style || { width: '100%', height: '100%' }} />;
};

export default GoogleMap;
