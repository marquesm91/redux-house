import * as R from 'ramda';
import identity from './utils/identity';

export default (type, param, effect = identity) => {
  if (R.isNil(param)) {
    return () => ({ type });
  }

  return R.compose(
    R.assoc('type', type),
    R.objOf(param),
    effect
  );
};
