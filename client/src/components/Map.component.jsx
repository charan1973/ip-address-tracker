import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { icon } from "leaflet";
import marker from "../assets/icon-location.svg";

const markerIcon = new icon({
  iconUrl: marker,
  iconSize: [40, 50],
});

function MapComponent(props) {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}

const Map = ({ location }) => {
  return (
    <MapContainer
      center={location}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={markerIcon} position={location}>
        <Popup>Your Location</Popup>
      </Marker>
      <MapComponent center={location} zoom={13} />
    </MapContainer>
  );
};

export default Map;
