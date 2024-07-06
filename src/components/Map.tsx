import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import "../map.css"

interface MapProps {}

interface Location {
  address: string;
  lat: number;
  lng: number;
}

const location: Location = {
  address: "Paras Metallurgicals, Bengaluru, Karnataka, India",
  lat: 13.0266603,
  lng: 77.5177372,
};

const LocationPin: React.FC<{ lat: number; lng: number; text: string }> = ({
  text,
}) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map: React.FC<MapProps> = () => {
  return (
    <div className="map">
      <h2 className="map-h2">Paras Metallurgicals</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAQ5KfNCHWip6TPZjxv96cRs8wyvtWRCmk" }}
          defaultCenter={{ lat: location.lat, lng: location.lng }}
          defaultZoom={15}
        >
          <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
