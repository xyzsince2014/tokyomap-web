import * as React from 'react';
import * as L from 'leaflet';
import {Map, TileLayer, ZoomControl} from 'react-leaflet';
import LeafletSearch from 'react-leaflet-search';
import {BiLogOutCircle} from 'react-icons/bi';
import {TiMessage} from 'react-icons/ti';

import {Tweet} from '../../services/socket/models';
import Clock from '../../containers/Clock/Clock';
import CustomMarker from '../../containers/LeafletMap/CustomMarker';
import Modal from '../../containers/LeafletMap/Modal';

export interface LeafletMapProps {
  tweets?: Tweet[];
  postTweet?: (message: string, geolocation: L.LatLngTuple) => void;
  geolocation: L.LatLngTuple;
  getGeolocationBegin: () => void;
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  tweets = [],
  postTweet = () => {},
  geolocation,
  getGeolocationBegin,
}) => {
  return (
    <div>
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
          <CustomMarker tweet={t} />
        ))}
      </Map>
      <div className="l-control">
        <div className="l-control__topright">
          <button
            type="button"
            onClick={() => {
              window.location.href = `${process.env.DOMAIN_API_AUTH}/auth/signout`;
            }}
          >
            <BiLogOutCircle />
          </button>
          <button type="button" data-modal-trigger="modal_socket" onClick={getGeolocationBegin}>
            <TiMessage />
          </button>
        </div>
        <div className="l-control__bottomleft">
          <Clock />
        </div>
      </div>
      <Modal postTweet={postTweet} geolocation={geolocation} />
    </div>
  );
};

export default LeafletMap;
