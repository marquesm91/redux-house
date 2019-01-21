import createActions from '../src/createActions';

describe('createActions', () => {
  const effect = value => `${value}!!!`;
  const actions = createActions({
    SET_USER_ONE: null,
    SET_USER_TWO: 'user',
    SET_USER_THREE: ['user'],
    SET_USER_FOUR: ['user', effect],
  });

  it('should return an object', () => {
    expect(actions).toHaveProperty('setUserOne');
    expect(actions).toHaveProperty('setUserTwo');
    expect(actions).toHaveProperty('setUserThree');
    expect(actions).toHaveProperty('setUserFour');
  });

  it('action created should return an object with "type"', () => {
    expect(actions.setUserOne()).toEqual({ type: 'SET_USER_ONE' });
  });

  it('action created should return an object with "type" and payload "user"', () => {
    expect(actions.setUserTwo('Doug')).toEqual({
      type: 'SET_USER_TWO',
      user: 'Doug',
    });
    expect(actions.setUserThree('Doug')).toEqual({
      type: 'SET_USER_THREE',
      user: 'Doug',
    });
  });

  it('action created should return an object with "type" and corret payload "user" after effect', () => {
    expect(actions.setUserFour('Doug')).toEqual({
      type: 'SET_USER_FOUR',
      user: 'Doug!!!',
    });
  });
});
