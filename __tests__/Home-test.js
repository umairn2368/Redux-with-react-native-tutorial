import 'react-native';
import React from 'react';
import Home from '../src/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const hello = renderer.create(
    <Home />
  );
});
