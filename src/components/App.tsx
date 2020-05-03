/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import LeafletMap from './LeafletMap/LeafletMap';

const App: React.FC = () => (
  <div>
    <LeafletMap />
  </div>
);

export default App;
