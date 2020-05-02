/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';

import HtmlTitle from './components/common/HtmlTitle';

const App: React.FC<{}> = () => (
  <div>
    <HtmlTitle />
    <article>
      <section>
        <h1>hoge</h1>
        <p>fuga</p>
      </section>
    </article>
  </div>
);

export default App;
