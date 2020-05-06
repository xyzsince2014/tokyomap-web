/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import {LatLngTuple} from 'leaflet';

export interface LeafletMapProps {
  latLng?: LatLngTuple;
  zoom?: number;
}

const LeafletMap: React.FC<LeafletMapProps> = ({latLng = [35.680722, 139.767271], zoom = 10}) => (
  <Map className="l-map" center={latLng} zoom={zoom}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={latLng}>
      <Popup>
        A pretty CSS3 popup.
        <br />
        Easily customizable.
      </Popup>
    </Marker>
    <div className="leaflet-bottom">
      <div className="watermark">
        <span>3 May 11:41</span>
      </div>
    </div>
  </Map>
);

export default LeafletMap;
