import * as React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import {LatLngTuple} from 'leaflet';

import Clock from './Clock';

export interface LeafletMapProps {
  centre?: LatLngTuple;
  zoom?: number;
  positions?: LatLngTuple[];
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  centre = [35.680722, 139.767271],
  zoom = 11,
  positions = [
    [35.7101, 139.8107],
    [35.7121, 139.8207],
  ],
}) => (
  <Map className="l-leafletmap" center={centre} zoom={zoom}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {positions.map(pos => (
      <Marker position={pos}>
        <Popup>
          A pretty CSS3 popup.<span className="u-phrase">Easily customizable.</span>
        </Popup>
      </Marker>
    ))}
    <div className="l-leafletmap__bottom">
      <Clock />
    </div>
  </Map>
);

export default LeafletMap;
