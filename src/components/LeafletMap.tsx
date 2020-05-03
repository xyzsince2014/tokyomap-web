/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import {Map, TileLayer} from 'react-leaflet';
import {LatLngTuple} from 'leaflet';

const LeafletMap: React.FC = () => {
  const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
  const zoom = 8;

  return (
    <Map id="map" center={defaultLatLng} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default LeafletMap;
