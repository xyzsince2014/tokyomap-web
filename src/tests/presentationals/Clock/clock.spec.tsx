import React from 'react';
import renderer from 'react-test-renderer';

import Clock from '../../../presentationals/Clock/Clock';

describe('Clock', () => {
  const component = renderer.create(<Clock datetime="hoge" />);
  const clockJson = component.toJSON();

  test('render Clock', () => {
    expect(clockJson).toMatchSnapshot();
  });
});
