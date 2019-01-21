import capitalize from '../../src/utils/capitalize';

describe('capitalize', () => {
  it('should transform "String" to "String"', () => {
    expect(capitalize('String')).toEqual('String');
  });

  it('should transform "string" to "String"', () => {
    expect(capitalize('string')).toEqual('String');
  });

  it('should transform "STRING" to "STRING"', () => {
    expect(capitalize('STRING')).toEqual('STRING');
  });
});
