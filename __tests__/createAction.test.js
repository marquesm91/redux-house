import createAction from '../src/createAction';

describe('createAction', () => {
  const type = 'SET_USER';
  const target = 'user';
  const effect = value => `${value}!!!`;

  it('should return a function', () => {
    expect(typeof createAction(type)).toEqual('function');
    expect(typeof createAction(type, target)).toEqual('function');
    expect(typeof createAction(type, target, effect)).toEqual('function');
  });

  it('action created should return an object with "type"', () => {
    const action = createAction(type);

    expect(action()).toEqual({ type });
  });

  it('action created should return an object with "type" and payload "user"', () => {
    const action = createAction(type, target);

    expect(action('Doug')).toEqual({ type, user: 'Doug' });
  });

  it('action created should return an object with "type" and correct payload "user" after effect', () => {
    const action = createAction(type, target, effect);

    expect(action('Doug')).toEqual({ type, user: 'Doug!!!' });
  });
});
