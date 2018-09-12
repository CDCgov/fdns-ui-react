import React from 'react';
import * as fixtures from '../../src/fixtures/fixtures';
import * as $package from '../../package.json';

describe('fixtures', () => {
  it('has a version', () => {
    expect(fixtures.version).toBe($package.version);
  });
});