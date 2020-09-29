import * as React from 'react';
import * as L from 'leaflet';
import {Map, Marker, Popup, TileLayer, ZoomControl, Tooltip} from 'react-leaflet';
import LeafletSearch from 'react-leaflet-search';
import Control from 'react-leaflet-control';
import {BiLogOutCircle} from 'react-icons/bi';

import {Tweet} from '../../services/socket/models';
import Clock from '../../containers/Clock/Clock';
import Socket from './Socket';
import CustomIcon from './CustomIcon';

export interface LeafletMapProps {
  tweets?: Tweet[];
  syncTweet?: (tweet: Tweet) => void;
}

const LeafletMap: React.FC<LeafletMapProps> = ({tweets = [], syncTweet = () => {}}) => (
  /* eslint-disable jsx-a11y/anchor-is-valid */
  <Map
    className="l-leafletmap"
    center={[35.680722, 139.767271]}
    zoom={15}
    // maxBounds={L.latLngBounds([35.2564493, 139.1532045], [35.8559256, 140.4057111])}
    zoomControl={false}
  >
    <LeafletSearch position="topleft" zoom={15} />
    <TileLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    />
    <ZoomControl position="bottomright" />
    {tweets.map(t => (
      <Marker position={[t.lat, t.lng]} icon={CustomIcon}>
        <Popup className="leaflet-popup-content-wrapper">
          <div className="leaflet-popup-content c-popup">
            <a className="permlink" title={t.postedAt} href="#">
              {t.postedAt.replace('T', ' ').replace('.000Z', '').substr(-8, 5)}
            </a>
            <br />
            {t.message}
            <div className="sharemin">
              <a
                href="https://facebook.com/sharer/sharer.php?u=hoge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Fb
              </a>
              <a
                href="https://twitter.com/intent/tweet/?text=@hkmaplive&url=hoge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Tw
              </a>
              <a
                href="https://telegram.me/share/url?text=頻道%3A@hkmaplive&url=hoge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                Tel
              </a>
            </div>
          </div>
        </Popup>
        <Tooltip className="c-tooltip">
          {t.postedAt.replace('T', ' ').replace('.000Z', '').substr(-8, 5)}&nbsp;{t.message}
        </Tooltip>
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
  /* eslint-enable jsx-a11y/anchor-is-valid */
);

export default LeafletMap;
