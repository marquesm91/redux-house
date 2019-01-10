import camelize from '../../src/utils/camelize';

describe('camelize', () => {
  it('should transform "my_string" to "myString"', () => {
    expect(camelize('MY_STRING')).toEqual('myString');
  });

  it('should transform "MY_STRING" to "myString"', () => {
    expect(camelize('MY_STRING')).toEqual('myString');
  });
});
