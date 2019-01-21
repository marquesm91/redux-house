import createRequest from '../src/createRequest';
import createAction from '../src/createAction';

describe('createRequest', () => {
  const setUser = createAction('SET_USER', 'user');
  const setToken = createAction(
    'SET_TOKEN',
    'token',
    value => `Bearer ${value}`
  );

  const tryLogin = createRequest({
    name: 'tryLogin',
    target: 'legacy',
    method: 'POST',
    endpoint: 'auth/login',
    data: ['email', 'password'],
    secure: true,
    onSuccess: ({ user, token }) => [setUser(user), setToken(token)],
  });

  it('should return a function', () => {
    expect(typeof tryLogin).toEqual('function');
  });
});
