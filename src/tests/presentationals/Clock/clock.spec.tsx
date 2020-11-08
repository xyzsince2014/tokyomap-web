import React from 'react';
import renderer from 'react-test-renderer';

import Clock from '../../../presentationals/Clock/Clock';

describe('Clock', () => {
  const component = renderer.create(<Clock datetime="8 Nov 19:20" />);
  const clockJson = component.toJSON();

  test('render Clock', () => {
    expect(clockJson).toMatchSnapshot();
  });
});
