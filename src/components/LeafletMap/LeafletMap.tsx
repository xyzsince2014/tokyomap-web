import * as React from 'react';
import * as L from 'leaflet';
import {Map, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import LeafletSearch from 'react-leaflet-search';
import Control from 'react-leaflet-control';
import {BiLogOutCircle} from 'react-icons/bi';

import {Tweet} from '../../services/socket/models';
import Clock from '../../containers/Clock/Clock';
import Socket from './Socket';

export interface LeafletMapProps {
  tweets?: Tweet[];
  syncTweet?: (tweet: Tweet) => void;
}

const LeafletMap: React.FC<LeafletMapProps> = ({tweets = [], syncTweet = () => {}}) => {
  return (
    <Map
      className="l-leafletmap"
      center={[35.680722, 139.767271]}
      zoom={15}
      maxBounds={L.latLngBounds([35.2564493, 139.1532045], [35.8559256, 140.4057111])}
      zoomControl={false}
    >
      <LeafletSearch position="topleft" zoom={15} />
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      {tweets.map(t => (
        <Marker position={[t.lat, t.lng]}>
          <Popup>{t.message}</Popup>
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
        <Socket tweets={tweets} syncTweet={syncTweet} />
      </Control>
      <div className="l-leafletmap__bottom">
        <Clock />
      </div>
    </Map>
  );
};

export default LeafletMap;
