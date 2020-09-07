import * as React from 'react';
import {Dimmer, Loader, Segment} from 'semantic-ui-react';

const Spinner: React.FC<{message?: string}> = ({message = 'Loading...'}) => (
  <Segment css="c-spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>{message}</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
