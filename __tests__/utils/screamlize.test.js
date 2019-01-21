import screamlize from '../../src/utils/screamlize';

describe('screamlize', () => {
  it('should transform "MY_STRING" to "MY_STRING"', () => {
    expect(screamlize('MY_STRING')).toEqual('MY_STRING');
  });

  it('should transform "myString" to "MY_STRING"', () => {
    expect(screamlize('myString')).toEqual('MY_STRING');
  });

  it('should transform "my_String" to "MY_STRING"', () => {
    expect(screamlize('my_String')).toEqual('MY_STRING');
  });
});
