import * as React from 'react';
import * as L from 'leaflet';
import {Map, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import LeafletSearch from 'react-leaflet-search';
import Control from 'react-leaflet-control';
import {BiLogOutCircle} from 'react-icons/bi';

import Clock from '../../containers/Clock/Clock';

export interface LeafletMapProps {
  centre?: L.LatLngTuple;
  zoom?: number;
  positions?: L.LatLngTuple[];
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  centre = [35.680722, 139.767271],
  zoom = 15,
  positions = [
    [35.7295071, 139.7087114],
    [35.689611, 139.6983826],
    [35.6580382, 139.6994471],
    [35.6812405, 139.7649361],
    [35.5493975, 139.7776499],
    [35.771991, 140.3906614],
  ],
}) => {
  const bounds = L.latLngBounds([35.2564493, 139.1532045], [35.8559256, 140.4057111]);
  return (
    <Map
      className="l-leafletmap"
      center={centre}
      zoom={zoom}
      maxBounds={bounds}
      zoomControl={false}
    >
      <LeafletSearch position="topleft" zoom={15} />
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      {positions.map(pos => (
        <Marker position={pos}>
          <Popup>
            A pretty CSS3 popup.<span className="u-phrase">Easily customizable.</span>
          </Popup>
        </Marker>
      ))}
      <Control position="topright">
        <button
          type="button"
          onClick={() => {
            window.location.href = `${process.env.DOMAIN_API_AUTH}/auth/signout`;
          }}
        >
          <BiLogOutCircle />
        </button>
      </Control>
      <div className="l-leafletmap__bottom">
        <Clock />
      </div>
    </Map>
  );
};

export default LeafletMap;
