import createAction from 'createAction';

describe('createAction', () => {
  it('should return a function', () => {
    expect(typeof createAction('ACTION')).toEqual('function');
    expect(typeof createAction('ACTION', ['payload'])).toEqual('function');
    expect(typeof createAction('ACTION', ['payload'], () => true)).toEqual(
      'function'
    );
  });

  it('action created should return an object with "type"', () => {
    const type = 'ACTION';
    const action = createAction(type);

    expect(action()).toEqual({ type });
  });

  it('action created should return an object with "type" and "payload"', () => {
    const type = 'ACTION';
    const action = createAction(type, 'payload');

    expect(action('payload')).toEqual({ type, payload: 'payload' });
  });

  it('action created should return an object with "type" and correct "payload" after effect call', () => {
    const type = 'ACTION';
    const effect = value => `${value}!!!`;
    const action = createAction(type, 'payload', effect);

    expect(action('payload')).toEqual({ type, payload: 'payload!!!' });
  });
});
