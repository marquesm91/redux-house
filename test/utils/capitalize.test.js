import capitalize from '../../src/utils/capitalize';

describe('capitalize', () => {
  it('should transform "string" to "string"', () => {
    expect(capitalize('string')).toEqual('String');
  });
});
