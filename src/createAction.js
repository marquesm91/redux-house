import { isNil, compose, assoc, objOf } from 'ramda';
import identity from './utils/identity';

export default (type, param, effect = identity) => {
  if (isNil(param)) {
    return () => ({ type });
  }

  return compose(
    assoc('type', type),
    objOf(param),
    effect
  );
};
