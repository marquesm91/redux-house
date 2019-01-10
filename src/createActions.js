import { is, length } from 'ramda';
import createAction from './createAction';
import camelize from './utils/camelize';

export default object => {
  const keys = Object.keys(object);

  const actions = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const actionName = camelize(key);
    const value = object[key];

    if (is(Array, value)) {
      const target = value[0];

      if (length(value) === 2) {
        const effect = value[1];
        actions[actionName] = createAction(key, target, effect);
      } else {
        actions[actionName] = createAction(key, target);
      }
    } else {
      actions[actionName] = createAction(key, value);
    }
  }

  return actions;
};
