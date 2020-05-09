import * as React from 'react';
import {Helmet} from 'react-helmet';

const HtmlTitle: React.FC<{title?: string}> = ({title = 'hoge'}) =>
  title ? (
    <Helmet htmlAttributes={{lang: 'en'}}>
      <title>{title}</title>
    </Helmet>
  ) : (
    <div />
  );

export default HtmlTitle;
