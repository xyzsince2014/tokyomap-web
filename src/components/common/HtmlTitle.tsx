/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
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
