import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const [position, setPosition] = useState(null);
  const [mapComponents, setMapComponents] = useState(null);

  useEffect(() => {
    // Dynamically import MapContainer and related components on the client side
    import("react-leaflet").then((L) => {
      const { MapContainer, TileLayer, Marker, Popup, useMapEvents } = L;

      const LocationMarker = () => {
        const map = useMapEvents({
          click: (e) => {
            const { lat, lng } = e.latlng;
            setPosition([lat, lng]);
          },
        });

        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        );
      };

      // Set the map components to state
      setMapComponents({
        MapContainer,
        TileLayer,
        LocationMarker,
      });
    });
  }, [position]);

  return mapComponents ? (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <mapComponents.LocationMarker />
      </MapContainer>
    </div>
  ) : null; // Return null during server-side rendering
};

export default Map;
