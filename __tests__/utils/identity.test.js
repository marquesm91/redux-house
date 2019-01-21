import identity from '../../src/utils/identity';

describe('identity', () => {
  it('should always return which receives', () => {
    expect(identity('MY_STRING')).toEqual('MY_STRING');
    expect(identity('my_string')).toEqual('my_string');
    expect(identity('myString')).toEqual('myString');
  });
});
