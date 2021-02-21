import * as React from 'react';
import * as L from 'leaflet';
import {Map, TileLayer, ZoomControl} from 'react-leaflet';
import {BiLogOutCircle} from 'react-icons/bi';
import {TiMessage} from 'react-icons/ti';

import {Tweet} from '../../services/socket/models';
import Clock from '../../containers/Clock/Clock';
import CustomMarker from '../../containers/LeafletMap/CustomMarker';
import ModalTweet from '../../containers/LeafletMap/ModalTweet';
import ModalAuth from '../../containers/LeafletMap/ModalAuth';

export interface LeafletMapProps {
  userId: string;
  tweets?: Tweet[];
  postTweet?: (userId: string, message: string, geolocation: L.LatLngTuple) => void;
  geolocation: L.LatLngTuple;
  getGeolocation: () => void;
  isAuthenticated: boolean;
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  userId,
  tweets = [],
  postTweet = () => {},
  geolocation,
  getGeolocation,
  isAuthenticated = false,
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
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        />
        <ZoomControl position="bottomright" />
        {tweets.map(t => (
          <div key={`tweet_${t.tweetId}`}>
            <CustomMarker tweet={t} />
          </div>
        ))}
      </Map>
      {isAuthenticated ? (
        <div>
          <div className="l-control">
            <div className="l-control__topleft">
              <button
                type="button"
                onClick={() => {
                  window.location.href = `${process.env.DOMAIN_API}/auth/signout`;
                }}
              >
                <BiLogOutCircle />
              </button>
            </div>
            <div className="l-control__topright">
              <button type="button" data-modal-trigger="modal_tweet" onClick={getGeolocation}>
                <TiMessage />
              </button>
            </div>
            <div className="l-control__bottomleft">
              <Clock />
            </div>
          </div>
          <ModalTweet userId={userId} postTweet={postTweet} geolocation={geolocation} />
        </div>
      ) : (
        <div>
          <div className="l-control">
            <div className="l-control__topright">
              <button type="button" data-modal-trigger="modal_auth">
                <TiMessage />
              </button>
            </div>
            <div className="l-control__bottomleft">
              <Clock />
            </div>
          </div>
          <ModalAuth />
        </div>
      )}
    </div>
  );
};

export default LeafletMap;
