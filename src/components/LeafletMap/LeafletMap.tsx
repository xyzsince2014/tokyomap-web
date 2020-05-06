import * as React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import {LatLngTuple} from 'leaflet';

import Clock from './Clock';

export interface LeafletMapProps {
  latLng?: LatLngTuple;
  zoom?: number;
}

const LeafletMap: React.FC<LeafletMapProps> = ({latLng = [35.680722, 139.767271], zoom = 11}) => (
  <Map className="l-leafletmap" center={latLng} zoom={zoom}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={latLng}>
      <Popup>
        A pretty CSS3 popup.<span className="u-phrase">Easily customizable.</span>
      </Popup>
    </Marker>
    <div className="l-leafletmap__bottom">
      <Clock />
    </div>
  </Map>
);

export default LeafletMap;
